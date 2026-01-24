import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Megaphone, Calendar, X, Edit3, Save } from "lucide-react";

interface Announcement {
  id: string;
  date: string;
  title: string;
  content: string;
}

const defaultAnnouncements: Announcement[] = [
  {
    id: "1",
    date: "2025-01",
    title: "星脈聯盟新年策略會議",
    content: "2025年度戰略規劃會議將於珠海舉行，探討大灣區發展新機遇。"
  },
  {
    id: "2",
    date: "2024-12",
    title: "視覺方舟年度盛典",
    content: "回顧過去一年的創意成果，展望未來數位文化新篇章。"
  },
  {
    id: "3",
    date: "2024-11",
    title: "跨境服務升級計劃",
    content: "優化香港、肇慶、珠海三地服務網絡，提升客戶體驗。"
  }
];

const STORAGE_KEY = "tw_announcements";
const SECRET_CODE = "00000000";

const AnnouncementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultAnnouncements;
  });
  
  const [isEditMode, setIsEditMode] = useState(false);
  const [keySequence, setKeySequence] = useState("");
  const [editingAnnouncements, setEditingAnnouncements] = useState<Announcement[]>([]);

  // Listen for secret code
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key;
      
      // Keep only last 8 characters
      const trimmedSequence = newSequence.slice(-8);
      setKeySequence(trimmedSequence);
      
      if (trimmedSequence === SECRET_CODE) {
        setIsEditMode(true);
        setEditingAnnouncements([...announcements]);
        setKeySequence("");
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [keySequence, announcements]);

  const handleSave = () => {
    setAnnouncements(editingAnnouncements);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(editingAnnouncements));
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditingAnnouncements([]);
  };

  const updateAnnouncement = (id: string, field: keyof Announcement, value: string) => {
    setEditingAnnouncements(prev => 
      prev.map(a => a.id === id ? { ...a, [field]: value } : a)
    );
  };

  const addAnnouncement = () => {
    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      date: new Date().toISOString().slice(0, 7),
      title: "新公告標題",
      content: "公告內容..."
    };
    setEditingAnnouncements(prev => [newAnnouncement, ...prev]);
  };

  const deleteAnnouncement = (id: string) => {
    setEditingAnnouncements(prev => prev.filter(a => a.id !== id));
  };

  return (
    <section id="announcements" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* 背景裝飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium tracking-wider text-accent uppercase">
            最新動態
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 font-serif">
            近期 <span className="text-gradient-gold">活動公告</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            了解我們的最新活動與重要消息
          </p>
        </motion.div>

        {/* Edit Mode Overlay */}
        {isEditMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Edit3 className="w-5 h-5" />
                  編輯公告欄
                </h3>
                <button
                  onClick={handleCancel}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={addAnnouncement}
                className="w-full mb-4 py-3 border-2 border-dashed border-gold-400/50 rounded-xl text-gold-600 hover:bg-gold-50 transition-colors"
              >
                + 新增公告
              </button>

              <div className="space-y-4">
                {editingAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="p-4 bg-muted/30 rounded-xl border border-border">
                    <div className="flex gap-3 mb-3">
                      <input
                        type="month"
                        value={announcement.date}
                        onChange={(e) => updateAnnouncement(announcement.id, "date", e.target.value)}
                        className="px-3 py-2 bg-background border border-border rounded-lg text-sm"
                      />
                      <button
                        onClick={() => deleteAnnouncement(announcement.id)}
                        className="ml-auto p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={announcement.title}
                      onChange={(e) => updateAnnouncement(announcement.id, "title", e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg mb-2 font-medium"
                      placeholder="標題"
                    />
                    <textarea
                      value={announcement.content}
                      onChange={(e) => updateAnnouncement(announcement.id, "content", e.target.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-lg resize-none"
                      rows={2}
                      placeholder="內容"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleCancel}
                  className="flex-1 py-3 border border-border rounded-xl text-muted-foreground hover:bg-muted transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-3 bg-gold-500 text-primary-foreground rounded-xl font-medium hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  儲存變更
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Announcements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-gold-500" />
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {announcement.date}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {announcement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {announcement.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
