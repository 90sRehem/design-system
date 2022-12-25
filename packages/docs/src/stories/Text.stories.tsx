import { Text, TextProps } from "@rehem-design-system/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: "Typography/Text",
    component: Text,
    args: {
        size: "md",
        children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eaque est velit autem dolor illum eos beatae et doloremque sed numquam quis pariatur amet aliquid corporis, consequatur veniam. Tenetur, voluptates."
    },
    argTypes: {
        size: {
            options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
            control: { type: "inline-radio" },
        },
    },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
    args: {
        as: "strong",
        children: "Strong text"
    }
}