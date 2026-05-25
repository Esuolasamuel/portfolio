// schemaTypes/skill.ts

import { defineField, defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "icon",
      title: "Skill Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "level",
      title: "Skill Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
          { title: "Expert", value: "expert" },
        ],
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Mobile", value: "mobile" },
          { title: "Database", value: "database" },
          { title: "DevOps", value: "devops" },
          { title: "Design", value: "design" },
        ],
      },
    }),
  ],
});