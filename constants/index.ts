export const themes = [
  { value: "light", label: "Light", icon: "/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/icons/moon.svg" },
  { value: "system", label: "System", icon: "/icons/computer.svg" },
];

export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 1,
    SILVER: 5,
    GOLD: 10,
  },
  ANSWER_COUNT: {
    BRONZE: 2,
    SILVER: 5,
    GOLD: 10,
  },
  QUESTION_UPVOTES: {
    BRONZE: 5,
    SILVER: 10,
    GOLD: 20,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 20,
    GOLD: 50,
  },
  TOTAL_VIEWS: {
    BRONZE: 100,
    SILVER: 1000,
    GOLD: 10000,
  },
};
