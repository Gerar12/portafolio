import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const ogImage = project.cover || project.images?.[0];

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
      url: `/projects/${project.slug}`,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.shortDescription,
    url: `https://gcoder.dev/projects/${project.slug}`,
    ...(project.cover ? { image: project.cover } : {}),
    ...(project.externalUrl ? { sameAs: project.externalUrl } : {}),
    keywords: project.stack.join(", "),
    author: {
      "@type": "Person",
      name: "Gerar Arévalo",
      url: "https://gcoder.dev",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailClient
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
