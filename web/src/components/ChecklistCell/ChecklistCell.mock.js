// Define your own mock data here:
export const standard = () => ({
  checklist: [
    {
      title: `Wash the car`,
      description: `Wash the car at least once a week.`,
      tasks: [
        {
          text: 'Drive to the wash station',
          completed: true,
        },
        {
          text: 'Use the manual wash & dryer',
          completed: true,
        },
        {
          text: 'Drive back home',
          completed: false,
        },
      ],
    },
    {
      title: `Clean the house`,
      description: `Remember to clean it when kids are out`,
      tasks: [
        {
          text: 'Charge the vacuum cleaner',
          completed: false,
        },
        {
          text: 'Clean the floors',
          completed: false,
        },
        {
          text: 'Clean the windows',
          completed: true,
        },
      ],
    },
    {
      title: `Buy groceries`,
      description: `Buy groceries`,
      tasks: [
        {
          text: 'Buy Soymilk',
          completed: false,
        },
        {
          text: 'Buy a dozen eggs',
          completed: true,
        },
        {
          text: 'Buy multigrain bread',
          completed: false,
        },
      ],
    },
  ],
})
