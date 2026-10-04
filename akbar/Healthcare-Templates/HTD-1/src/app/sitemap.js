export default function sitemap() {
  const baseUrl = "https://www.auradentalstudio.demo";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/smile-gallery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/school-dental-camps`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    }
  ];
}
