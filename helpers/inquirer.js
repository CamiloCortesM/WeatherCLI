const inquirer = require("inquirer");
require("colors");

const questions = [
  {
    type: "list",
    name: "option",
    message: "what do you want to do?",
    choices: [
      {
        value: 1,
        name: `${"1.".green}Search city`,
      },
      {
        value: 2,
        name: `${"2.".green}History`,
      },
      {
        value: 0,
        name: `${"0.".green}Exit \n`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".green);
  console.log("   Select an option".white);
  console.log("========================\n".green);

  const { option } = await inquirer.prompt(questions);
  return option;
};

const pause = async () => {
  console.log("\n");
  await inquirer.prompt([
    {
      type: "input",
      name: "input",
      message: `\nPress ${"ENTER".green} to continuen\n`,
    },
  ]);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "please enter a value";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listTasksDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: task.id,
      name: idx + task.desc,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "cancel",
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message: message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

const showListChecklist = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: task.id,
      name: idx + task.desc,
      checked: !!task.completeIn,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + "cancel",
  });

  const questions = [
    {
      type: "checkbox",
      name: "ids",
      message: "Select",
      choices,
    },
  ];

  const { ids } = await inquirer.prompt(questions);
  return ids;
};

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  listTasksDelete,
  confirm,
  showListChecklist,
};
