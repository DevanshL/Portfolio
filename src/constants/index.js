import project1 from "../assets/projects/twitter_analysis.png";
import project2 from "../assets/projects/balloon-blast-game.svg";
import project3 from "../assets/projects/sql_bot.jpg";
import project4 from "../assets/projects/yolov8-object-detection.svg";

import project5 from "../assets/Experience/ESAB.svg";
import project6 from "../assets/Experience/meritshot.jpg";


export const HERO_CONTENT = `I am a passionate AI Developer currently pursuing B.Tech in Computer Science with a Major in AI at IIIDM Kancheepuram. With experience in software development and data science, I specialize in creating AI applications using machine learning, deep learning, and computer vision technologies.`;

export const ABOUT_TEXT = `I am a dedicated AI Developer with a strong foundation in Computer Science and specialized knowledge in Artificial Intelligence. Currently pursuing my B.Tech at IIIDM Kancheepuram with a GPA of 7.75, I'm passionate about Deep Learning, Generative AI, Computer Vision, NLP, and Multi-Agent Systems. I have practical experience through internships at ESAB India and Meritshot, where I've worked on RAG-based chatbots and data science projects. My technical toolkit includes Python, C/C++, JavaScript, various ML frameworks, and database technologies.`;

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Jan 2025",
    image: project5,
    role: "Software Development Intern",
    company: "ESAB India",
    description: `Built an open-source chatbot using Retrieval-Augmented Generation (RAG) to process and search across 22,000+ company manual PDFs, enhancing information accessibility. Initiated the development of a fine-tuned LLM trained on internal manuals, laying the foundation for a custom company-Large language model.`,
    technologies: ["RAG", "LLM", "Python", "NLP"],
  },
  {
    year: "Mar 2024 - Jun 2024",
    image: project6,
    role: "Data Science Intern",
    company: "Meritshot",
    description: `Worked on in-depth case studies, research papers, and technical articles, developing strong analytical and research skills in data science. Reported directly to the Head of Data Science, gaining valuable experience in remote collaboration and contributing to impactful data-driven projects.`,
    technologies: ["Data Science", "Research", "Analysis", "Machine Learning"],
  }
];

export const PROJECTS = [
  {
    title: "Twitter Sentiment Analysis",
    image: project1,
    description: "Developed a sentiment analysis model to classify tweets as positive, negative, or neutral, using TextBlob for sentiment scoring. Preprocessed raw Twitter data by cleaning, tokenizing, and removing noise to improve accuracy and insights.",
    technologies: ["Python", "Machine Learning", "TextBlob", "NLTK", "Matplotlib"],
    link: "https://github.com/DevanshL/Twitter-Sentiment-Analysis"
  },
  {
    title: "Balloon Blast – Hand Tracking Game",
    image: project2,
    description: "Developed a gesture-controlled game where players pop balloons using real-time hand tracking. Built with Pygame, featuring smooth animations, collision detection, and an interactive scoring system.",
    technologies: ["OpenCV", "Mediapipe", "Pygame", "Python"],
    link: "https://github.com/DevanshL/ballon_blast"
  },
  {
    title: "SQL Query Bot",
    image: project3,
    description: "Developed an AI-powered bot using Google Gemini to translate natural language queries into SQL, enabling seamless database interaction. Deployed a Streamlit interface for real-time query execution with MySQL integration.",
    technologies: ["Google Gemini", "MySQL", "Python", "Streamlit"],
    link: "https://github.com/DevanshL/Local_Database_Chatbot"
  },
  {
    title: "YOLOv8 Object Detection and Tracking",
    image: project4,
    description: "Designed a real-time object detection and instance segmentation system using YOLOv8, supporting video streams, images, and YouTube URLs for precise tracking and analysis.",
    technologies: ["YOLOv8", "OpenCV", "Streamlit", "Instance Segmentation"],
    link: "https://github.com/DevanshL/YOLOv8-Object-Detection-and-Tracking"
  }
];

export const CONTACT = {
  email: "l.devansh2073@gmail.com",
  address: "IIITDM KANCHEEPURAM,Chennai, Tamil Nadu, 600127",
  phone: "+91 638-xxx-xxxx"
};

export const EDUCATION = {
  university: "IIIDM Kancheepuram",
  degree: "B.Tech. Computer Science With Major in AI",
  period: "2021-2025",
  gpa: "Current GPA: 7.75"
};

export const SKILLS = {
  languages: ["C/C++", "Python", "JavaScript", "HTML/CSS"],
  tools: ["Git/GitHub", "Kaggle", "Google Colab", "VS Code", "PyCharm", "Hugging Face", "Groq Inference"],
  frameworks: ["Streamlit", "Flask", "Bootstrap", "LangChain"],
  libraries: ["Pandas", "NumPy", "Matplotlib", "Sklearn", "Tensorflow", "Keras", "Pygame", "OpenCV", "Torch", "scipy"],
  databases: ["PostgreSQL", "MySQL"]
};