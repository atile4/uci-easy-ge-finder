export const styles = {
  wrapper: { mb: 4 },
  searchRow: { display: "flex", gap: 2, mb: 2 },
  filterButton: {
    minWidth: { xs: "auto", sm: 140 },
    px: { xs: 1.5, sm: 3 },
    borderRadius: 1,
    "& .MuiButton-startIcon": { margin: { xs: 0, sm: undefined } },
  },
  filterLabel: { display: { xs: "none", sm: "inline" }, ml: 1 },
  filterPanel: {
    p: 3,
    borderRadius: 1,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "rgba(255,255,255,0.92)",
  },
} as const;
