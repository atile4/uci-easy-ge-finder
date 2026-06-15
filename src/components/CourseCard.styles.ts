export const styles = {
  wrapper: {
    overflow: "hidden",
    transition: "transform 0.25s, box-shadow 0.25s",
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
    },
  },
  content: { p: 3 },
  statsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: 2,
    mb: 2,
    alignItems: "flex-start",
  },
  geCategoriesWrapper: { display: "flex", flexWrap: "wrap", gap: 1 },
  categoryTag: {
    bgcolor: "primary.light",
    color: "primary.dark",
    fontWeight: 700,
  },
  graphWrapper: { minHeight: 220 },
  statPaper: {
    p: 1.5,
    borderRadius: 1,
    backgroundColor: "rgba(37, 99, 235, 0.06)",
  },
  statText: { textTransform: "uppercase", letterSpacing: 0.5 },
};
