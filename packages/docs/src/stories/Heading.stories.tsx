import { Heading, HeadingProps } from "@design-system/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: "Typography/Heading",
    component: Heading,
    args: {
        children: "Custom heading",
        size: "md",
    },
    argTypes: {
        size: {
            options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
            control: { type: "inline-radio" },
        },
    },

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        as: "h1",
        children: "H1 heading"
    },
    parameters: {
        docs: {
            description: {
                story: "Por padrão, o heading sempre será um `h2`, mas podemos alterar isso com as propriedade `as`.",
            },
        },
    },
}