import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  background: transparent;
`;

export const Option = styled.TouchableOpacity({
  marginLeft: 8,
});
