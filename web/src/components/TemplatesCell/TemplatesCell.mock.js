// Define your own mock data here:
export const standard = () => ({
  templates: [
    {
      title: `Wash the car`,
      description: `Wash the car at least once a week.`,
      tasks: [
        {
          text: 'Drive to the wash station',
          completed: false,
        },
        {
          text: 'Use the manual wash & dryer',
          completed: false,
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
          completed: false,
        },
        {
          text: "Clean kid's toys",
          completed: false,
        },
      ],
    },
    {
      title: `Buy groceries`,
      description: `Buy groceries`,
      tasks: [
        {
          text: 'Buy milk',
          completed: false,
        },
        {
          text: 'Buy eggs',
          completed: false,
        },
        {
          text: 'Buy bread',
          completed: false,
        },
      ],
    },
    {
      title: `Take the dog for a walk`,
      description: `Take the dog for a walk`,
      tasks: [
        {
          text: 'Check weather',
          completed: false,
        },
        {
          text: 'Take the dog outside',
          completed: false,
        },
      ],
    },
    {
      title: `Book a flight`,
      description: `Book a flight`,
      tasks: [
        {
          text: 'Search on Google flight',
          completed: false,
        },
        {
          text: 'Check promotion',
          completed: false,
        },
        {
          text: 'Purchase the ticket',
          completed: false,
        },
      ],
    },
  ],
})
