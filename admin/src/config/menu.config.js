export default {
  menu: [
    {
      icon: "tachometer-alt",
      label: "Dashboard",
      to: "/",
    },
    {
      icon: "envelope",
      label: "Mail",
      to: "#a-link",
    },
    {
      icon: "calendar-alt",
      label: "Calendar",
      to: "calendar",
    },
    {
      icon: "table",
      label: "Table",
      content: [
        {
          icon: "table",
          label: "Table 1",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Table 2",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Table 3",
          to: "#another-link",
        },
      ],
    },
    {
      icon: "edit",
      label: "Form",
      content: [
        {
          icon: "icon-class-name",
          label: "sub Form",
          to: "#profile",
        },
      ],
    },
    {
      icon: "calendar-check",
      label: "Tasks",
      to: "tasks",
    },
    {
      icon: "comment-alt",
      label: "Chat",
      to: "chat",
    },
  ],
};
