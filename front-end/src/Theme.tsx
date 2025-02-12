import type { CustomFlowbiteTheme } from "flowbite-react";

const herraTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-accent hover:bg-primary text-accent hover:text-accent active:text-accent active:bg-primary active:hover:bg-accent active:hover:text-white",
    },
  },
  navbar: {
    "root": {
      "base": "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      "rounded": {
        "on": "rounded",
        "off": ""
      },
      "bordered": {
        "on": "border",
        "off": ""
      },
      "inner": {
        "base": "mx-auto flex flex-wrap items-center justify-between",
        "fluid": {
          "on": "",
          "off": "container"
        }
      }
    },
    "brand": {
      "base": "flex items-center"
    },
    "collapse": {
      "base": "w-full md:block md:w-auto",
      "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      "hidden": {
        "on": "hidden",
        "off": ""
      }
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 md:p-2 md:w-32 text-center md:rounded-md",
      "active": {
        "on": "text-accent bg-transparent dark:text-white md:bg-accent md:text-white",
        "off": "border-gray-100 text-primary md:bg-primary md:text-white hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-accent md:dark:hover:bg-transparent md:dark:hover:text-white"
      },
      "disabled": {
        "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        "off": ""
      }
    },
    "toggle": {
      "base": "inline-flex items-center rounded-lg p-2 text-sm text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      "icon": "h-6 w-6 shrink-0"
    }
  },
  textInput: {
    "base": "flex",
    "addon": "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    "field": {
      "base": "relative w-full",
      "icon": {
        "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      "rightIcon": {
        "base": "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        "svg": "h-5 w-5 text-white dark:text-gray-400"
      },
      "input": {
        "base": "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        "sizes": {
          "sm": "p-2 sm:text-xs",
          "md": "p-2.5 text-sm",
          "lg": "p-4 sm:text-base"
        },
        "colors": {
          "gray": "border-white text-white bg-primary placeholder-accent focus:border-accent focus:ring-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-200 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        "withRightIcon": {
          "on": "pr-10",
          "off": ""
        },
        "withIcon": {
          "on": "pl-10",
          "off": ""
        },
        "withAddon": {
          "on": "rounded-r-lg",
          "off": "rounded-lg"
        },
        "withShadow": {
          "on": "shadow-sm dark:shadow-sm-light",
          "off": ""
        }
      }
    }
  },
  footer: {
    "root": {
      "base": "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
      "container": "w-full p-6",
      "bgDark": "bg-gray-800"
    },
    "groupLink": {
      "base": "flex flex-wrap text-sm text-accent dark:text-white",
      "link": {
        "base": "me-4 last:mr-0 md:mr-6",
        "href": "hover:underline"
      },
      "col": "flex-col space-y-4"
    },
    "icon": {
      "base": "text-accent dark:hover:text-white",
      "size": "h-5 w-5"
    },
    "title": {
      "base": "mb-6 text-sm font-semibold uppercase text-primary dark:text-white"
    },
    "divider": {
      "base": "my-6 w-full border-primary dark:border-gray-700 sm:mx-auto lg:my-8"
    },
    "copyright": {
      "base": "text-sm text-accent dark:text-gray-400 sm:text-center",
      "href": "ml-1 hover:underline",
      "span": "ml-1"
    },
    "brand": {
      "base": "mb-4 flex items-center sm:mb-0",
      "img": "mr-3 h-8",
      "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
    }
  }
};

export default herraTheme;
