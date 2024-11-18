"use client";
import React from "react";

function MainComponent() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isMobile, setIsMobile] = React.useState(false); // 初期値を false に設定

  React.useEffect(() => {
    // クライアントサイドでのみ実行される処理
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 640);
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  interface Project {
    id: number;
    title: string;
    description: string;
    details: string;
    imgSrc: string;
    innovations: string;
    url: string;
    git: string;
    reason: string;
  }

  const projects: Project[] = [
      {
      id: 1,
      title: "Project 1",
      description: "毎日占いbot",
      details: "毎日0時15分に様々なサイトの星座占いの結果を収集し、星座ごとに順位の高い3サイトをLine botが順に返すものです。また毎日目標を設定することができ、20時に目標が達成出来たかの確認メッセージがくるので1日を振り返ることが出来ます。",
      imgSrc: "/スクリーンショット 2024-06-12 094530.png",
      innovations: "私が担当した部分は開発全般で、基本運営を全てawsで一貫することで容易な運営管理、サーバーレス環境を実現しました。また運営費および開発費は全て0円の為、継続開発、運営がしやすいのも大きなメリットです。",
      url: "LineID:@552gglxl",
      git: "https://github.com/rie622skt/line_uranai.git",
      reason: "Motivation and thought process.",
    },
    {
      id: 2,
      title: "Project 2",
      description: "doda情報収集コード",
      details: "企業解析のためdodaの求人情報を収集し、その中から特定の条件を満たすものを抽出するコードです。また、その情報をリスト化しcsvファイルに保存します。",
      imgSrc: "/スクリーンショット 2024-06-11 180645.png",
      innovations: "pandasを用いてデータの整理を行い、csvファイルに保存することで、データの可視化を容易にしました。また条件を変更するだけで異なるデータを収集することができるのでき、正規表現を用いているので様々なデータを収集することが可能です。",
      url: "",
      git: "https://github.com/rie622skt/doda.git",
      reason: "Motivation and thought process.",
    },
    {
      id: 3,
      title: "Project 3",
      description: "invoice対策値引きアプリ",
      details: "自営業の父のために作成した、一定の金額に対して様々な値引き率で計算できるアプリです。",
      imgSrc: "/スクリーンショット 2024-06-12 094405.png",
      innovations: "シンプルなUIで、金額と値引き率を入力するだけで計算ができるので、直感的に簡単に使うことができます。",
      url: "https://rie622skt.github.io/invoice/",
      git: "https://github.com/rie622skt/invoice.git",
      reason: "Motivation and thought process.",
    },
  ];

    interface Skill {
    id: number;
    name: string;
    level: string;
  }

  const skills: Skill[] = [
    // 既存のスキルデータ
    { id: 1, name: "Python", level: "2年ほどメインで使用しており、project1、project2のバックエンドで使用しています。" },
    { id: 2, name: "aws", level: "project1に使用しました。" },
    { id: 3, name: "React", level: "このポートフォリオサイトの制作で、初めて使用しました。" },
    { id: 4, name: "Node.js", level: "このポートフォリオサイトの制作で、初めて使用しました。" },
    { id: 5, name: "vb.net", level: "インターン先で使用しました。" },
    // 他のスキルデータもここに
  ];
  const internships = [
    {
      id: 1,
      company: "東山株式会社",
      role: "実施済み",
      duration: "1か月間",
    },
    {
      id: 2,
      company: "RIZAPグループ",
      role: "実施済み",
      duration: "3日間",
    },
    {
      id: 3,
      company: "セーフィー株式会社",
      role: "実施済み",
      duration: "2日間",
    },
    {
      id: 4,
      company: "HR Brain",
      role: "実施済み",
      duration: "2日間",
    },

  ];

  const technologiesUsed = ["React", "Tailwind CSS", "JavaScript", "Node.js"];
  
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('./background.jpg')", zIndex: -1 }}
      ></div>
      <header
        className={`p-6 bg-gray-800 shadow-md ${
          isMobile
            ? "flex flex-col items-center"
            : "flex items-center justify-between"
        }`}
      >
        <h1 className="text-3xl font-bold mb-2">My Portfolio</h1>
        {!isMobile && (
          <nav className="space-x-4 flex-row">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
            <a href="#internships" className="hover:text-gray-400">
              Internships
            </a>
            <a href="#technologies-used" className="hover:text-gray-400">
              Technologies Used
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        )}
      </header>
      {isMobile && (
        <nav className="space-y-2 text-center mt-2">
          <a href="#about" className="hover:text-gray-400 block">
            About
          </a>
          <a href="#projects" className="hover:text-gray-400 block">
            Projects
          </a>
          <a href="#skills" className="hover:text-gray-400 block">
            Skills
          </a>
          <a href="#internships" className="hover:text-gray-400 block">
            Internships
          </a>
          <a href="#technologies-used" className="hover:text-gray-400 block">
            Technologies Used
          </a>
          <a href="#contact" className="hover:text-gray-400 block">
            Contact
          </a>
        </nav>
      )}
      <main className="p-6">
        <section id="about" className="my-12 text-center">
          <h2 className="text-5xl font-semibold mb-4 animation-slideIn">
            Sakida Ryuto
          </h2>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            初めまして、私はエンジニアを目指している大学三年生の﨑田琉翔（サキダリュウト）と申します。
            経営学部に所属しており、主に経営学を学んでいます。プログラミングは大学一年生の時に初めて触れ、その後は独学で学びました。
            主にバックエンドの開発を行っており、Pythonを用いた開発が得意です。今後はフロントエンドの開発も学び、フルスタックエンジニアを目指しています。
            
          </p>
        </section>
        <section id="projects" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div
            className={`grid grid-cols-1 ${
              !isMobile ? "sm:grid-cols-2 lg:grid-cols-3" : ""
            } gap-4`}
          >
            {projects.map((project) => {
              const isSelected =
                selectedProject && selectedProject.id === project.id;
              return (
                <div
                  key={project.id}
                  className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer"
                  onClick={() =>
                    setSelectedProject(isSelected ? null : project)
                  }
                >
                  <img
                    src={project.imgSrc}
                    alt={`Screenshot of project titled ${project.title}`}
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                  <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                  <p className="mt-2">{project.description}</p>
                  {isMobile && isSelected && (
                    <div className="mt-4">
                      <p>{project.details}</p>
                      <p className="mt-4">
                        Innovations: {project.innovations}
                      </p>
                      <p className="mt-2">
                        URL:{" "}
                        <a
                          href={project.url}
                          className="text-blue-500 underline"
                        >
                          {project.url}
                        </a>
                      </p>
                      <p className="mt-2">
                        Git:{" "}
                        <a
                          href={project.git}
                          className="text-blue-500 underline"
                        >
                          {project.git}
                        </a>
                      </p>
                      <p className="mt-2">Reason: {project.reason}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {!isMobile && selectedProject && (
            <div className="mt-8 p-4 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="mb-4">{selectedProject.details}</p>
              <p className="mb-4">
                Innovations: {selectedProject.innovations}
              </p>
              <p className="mb-4">
                URL:{" "}
                <a
                  href={selectedProject.url}
                  className="text-blue-500 underline"
                >
                  {selectedProject.url}
                </a>
              </p>
              <p className="mb-4">
                Git:{" "}
                <a
                  href={selectedProject.git}
                  className="text-blue-500 underline"
                >
                  {selectedProject.git}
                </a>
              </p>
              <p className="mb-4">Reason: {selectedProject.reason}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          )}
        </section>
        <section id="skills" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="mt-2">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="internships" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Internships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{internship.company}</h3>
                <p className="mt-2">{internship.role}</p>
                <p className="mt-2">{internship.duration}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="technologies-used" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologiesUsed.map((tech, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{tech}</h3>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <form className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-1 font-sans"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 bg-gray-700 rounded-md font-sans"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 font-sans"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 bg-gray-700 rounded-md font-sans"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-1 font-sans"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 bg-gray-700 rounded-md font-sans"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-sans"
            >
              Send
            </button>
          </form>
        </section>
      </main>
      <footer className="p-6 bg-gray-800 text-center">
        <p className="font-sans">&copy; 2023 My Portfolio</p>
      </footer>
      <style jsx global>{`
        body {
          animation: fadeIn 1s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animation-slideIn {
          animation: slideIn 2s;
        }
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
