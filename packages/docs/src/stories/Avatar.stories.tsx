import { Avatar, AvatarProps } from "@design-system/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: "Data display/Avatar",
    component: Avatar,
    args: {
        src: "https://avatars.githubusercontent.com/u/48484860?v=4",
        alt: "Avatar",
    },
    argTypes: {
        src: {
            control: { type: "text" },
        },
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}
