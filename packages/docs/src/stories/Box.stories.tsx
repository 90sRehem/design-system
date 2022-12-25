import { Box, BoxProps, Text } from "@design-system/react"
import type { StoryObj, Meta } from "@storybook/react"

export default {
    title: "Surfaces/Box",
    component: Box,
    args: {
        children: (
        <>
        <Text>Elemento Box</Text>
        </>)
    },
    argTypes: {
        children: {
            control: { type: null },
        }
    },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}