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
  height: 75,
  width: 125,
  marginLeft: 8,
  borderRadius: 8,
});
