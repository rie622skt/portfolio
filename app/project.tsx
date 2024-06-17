import React from 'react';
import { projects, Project } from '../data/projects'; // プロジェクトデータをインポート

const Page = () => {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  return (
    <div>
      {projects.map((project: Project) => {
        const isSelected = selectedProject && selectedProject.id === project.id;
        return (
          <div key={project.id} onClick={() => setSelectedProject(project)}>
            {/* プロジェクトの詳細を表示 */}
            <h2>{project.id}</h2>
            {isSelected && <p>Selected Project</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Page;
