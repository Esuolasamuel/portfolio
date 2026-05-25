// schemaTypes/social.ts

import { defineField, defineType } from "sanity";

export const socialType = defineType({
  name: "social",
  title: "Social Link",
  type: "document",

  fields: [
    defineField({
      name: "platform",
      title: "Platform Name",
      type: "string",
      options: {
        list: [
          { title: "GitHub", value: "github" },
          { title: "LinkedIn", value: "linkedin" },
          { title: "Twitter/X", value: "twitter" },
          { title: "Instagram", value: "instagram" },
          { title: "YouTube", value: "youtube" },
          { title: "Portfolio", value: "portfolio" },
        ],
      },
    }),

    defineField({
      name: "url",
      title: "Profile URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "icon",
      title: "Platform Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});