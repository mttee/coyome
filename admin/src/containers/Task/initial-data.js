const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Take out the garbage",
      avatar:
        "https://kenh14cdn.com/2018/12/17/irene-1545033423959427218059.png",
      code: 'MDS-1539',
      priority: 'Hight',
      type: 'New'
    },
    "task-2": {
      id: "task-2",
      content: "Watch my favorite show",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      code: 'MDS-1525',
      priority: 'Low',
      type: 'Improvement'
    },
    "task-3": {
      id: "task-3",
      content: "Charge my phone",
      avatar:
        "https://i-ione.vnecdn.net/2020/07/07/irene-1594102938-8459-1594103056_680x0.gif",
      code: 'MDS-1733',
      priority: 'Medium',
      type: 'Bug'
    },
    "task-4": {
      id: "task-4",
      content: "Cook dinner",
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      code: 'MDS-1120',
      priority: 'Medium',
      type: 'Improvement'
    },
    "task-5": {
      id: "task-5",
      content: "Multipurpose - layout design",
      avatar:
        "https://afamilycdn.com/150157425591193600/2020/6/29/10272071796276721750547919407477-15934067564311592637182.jpg",
      code: 'MDS-2100',
      priority: 'Low',
      type: 'New'
    },
    "task-6": {
      id: "task-6",
      content: "Multipurpose - d a New Landing UI",
      avatar:
        "https://luxury-inside.vn/data/uploads/2020/07/irene-red-velvet-lan-dau-xam-chiem-man-anh-rong-2.jpg",
        code: 'MDS-1203',
      priority: 'Hight',
      type: 'Bug'
    },
    "task-7": {
      id: "task-7",
      content: "Redesign - Landing page",
      avatar: "https://material-ui.com/static/images/avatar/1.jpg",
      code: 'MDS-1640',
      priority: 'Low',
      type: 'Improvement'
    },
    "task-8": {
      id: "task-8",
      content: "Multipurpose Dashboard UI",
      avatar: "https://material-ui.com/static/images/avatar/2.jpg",
      code: 'MDS-1733',
      priority: 'Medium',
      type: 'New'
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: ["task-6"],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: ["task-7", "task-8"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
