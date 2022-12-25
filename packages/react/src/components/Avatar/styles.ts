import { styled } from "../../styles";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
    borderRadius: "$full",
    display: "inline-block",
    overflow: "hidden",
    variants: {
        size: {
            sm: {
                width: "$6",
                height: "$6",
            },
            md: {
                width: "$8",
                height: "$8",
            },
            lg: {
                width: "$10",
                height: "$10",
            },
        },
    },
});

export const AvatarImage = styled(Avatar.Image, {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$gray600",
    color: "$gray800",

    svg: {
        width: "$6",
        height: "$6",
    }
});