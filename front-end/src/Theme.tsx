import type { CustomFlowbiteTheme } from "flowbite-react";

const herraTheme: CustomFlowbiteTheme = {
  button: {
    "base": "group relative flex items-stretch justify-center p-0.5 text-center font-medium transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none",
    "fullSized": "w-full",
    "color": {
      "dark": "border border-transparent bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 enabled:hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-gray-800 dark:enabled:hover:bg-gray-700",
      "failure": "border border-transparent bg-red-700 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-800 dark:bg-red-600 dark:focus:ring-red-900 dark:enabled:hover:bg-red-700",
      "gray": ":ring-cyan-700 border border-gray-200 bg-white text-gray-900 focus:text-cyan-700 focus:ring-4 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 dark:border-gray-600 dark:bg-transparent dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white",
      "info": "border border-transparent bg-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700",
      "light": "border border-gray-300 bg-white text-gray-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:border-gray-700 dark:enabled:hover:bg-gray-700",
      "purple": "border border-transparent bg-primary text-white focus:ring-4 focus:ring-accent enabled:hover:bg-accent dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
      "success": "border border-transparent bg-green-700 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-800 dark:bg-green-600 dark:focus:ring-green-800 dark:enabled:hover:bg-green-700",
      "warning": "border border-transparent bg-yellow-400 text-white focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-500 dark:focus:ring-yellow-900",
      "blue": "border border-transparent bg-blue-700 text-white focus:ring-4 focus:ring-blue-300 enabled:hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      "cyan": "border border-cyan-300 bg-white text-cyan-900 focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-100 dark:border-cyan-600 dark:bg-cyan-600 dark:text-white dark:focus:ring-cyan-700 dark:enabled:hover:border-cyan-700 dark:enabled:hover:bg-cyan-700",
      "green": "border border-green-300 bg-white text-green-900 focus:ring-4 focus:ring-green-300 enabled:hover:bg-green-100 dark:border-green-600 dark:bg-green-600 dark:text-white dark:focus:ring-green-700 dark:enabled:hover:border-green-700 dark:enabled:hover:bg-green-700",
      "indigo": "border border-indigo-300 bg-white text-indigo-900 focus:ring-4 focus:ring-indigo-300 enabled:hover:bg-indigo-100 dark:border-indigo-600 dark:bg-indigo-600 dark:text-white dark:focus:ring-indigo-700 dark:enabled:hover:border-indigo-700 dark:enabled:hover:bg-indigo-700",
      "lime": "border border-lime-300 bg-white text-lime-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-lime-100 dark:border-lime-600 dark:bg-lime-600 dark:text-white dark:focus:ring-lime-700 dark:enabled:hover:border-lime-700 dark:enabled:hover:bg-lime-700",
      "pink": "border border-transparent bg-accent text-white focus:ring-4 focus:ring-primary enabled:hover:bg-accent dark:bg-purple-600 dark:focus:ring-purple-900 dark:enabled:hover:bg-purple-700",
      "red": "border border-red-300 bg-white text-red-900 focus:ring-4 focus:ring-red-300 enabled:hover:bg-red-100 dark:border-red-600 dark:bg-red-600 dark:text-white dark:focus:ring-red-700 dark:enabled:hover:border-red-700 dark:enabled:hover:bg-red-700",
      "teal": "border border-teal-300 bg-white text-teal-900 focus:ring-4 focus:ring-teal-300 enabled:hover:bg-teal-100 dark:border-teal-600 dark:bg-teal-600 dark:text-white dark:focus:ring-teal-700 dark:enabled:hover:border-teal-700 dark:enabled:hover:bg-teal-700",
      "yellow": "border border-yellow-300 bg-white text-yellow-900 focus:ring-4 focus:ring-yellow-300 enabled:hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-600 dark:text-white dark:focus:ring-yellow-700 dark:enabled:hover:border-yellow-700 dark:enabled:hover:bg-yellow-700"
    },
    "disabled": "cursor-not-allowed opacity-50",
    "isProcessing": "cursor-wait",
    "spinnerSlot": "absolute top-0 flex h-full items-center",
    "spinnerLeftPosition": {
      "xs": "left-2",
      "sm": "left-3",
      "md": "left-4",
      "lg": "left-5",
      "xl": "left-6"
    },
    "gradient": {
      "cyan": "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
      "failure": "bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white focus:ring-4 focus:ring-red-300 enabled:hover:bg-gradient-to-br dark:focus:ring-red-800",
      "info": "bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-br dark:focus:ring-cyan-800",
      "lime": "bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 text-gray-900 focus:ring-4 focus:ring-lime-300 enabled:hover:bg-gradient-to-br dark:focus:ring-lime-800",
      "pink": "bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white focus:ring-4 focus:ring-pink-300 enabled:hover:bg-gradient-to-br dark:focus:ring-pink-800",
      "purple": "bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white focus:ring-4 focus:ring-purple-300 enabled:hover:bg-gradient-to-br dark:focus:ring-purple-800",
      "success": "bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white focus:ring-4 focus:ring-green-300 enabled:hover:bg-gradient-to-br dark:focus:ring-green-800",
      "teal": "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white focus:ring-4 focus:ring-teal-300 enabled:hover:bg-gradient-to-br dark:focus:ring-teal-800"
    },
    "gradientDuoTone": {
      "cyanToBlue": "bg-gradient-to-r from-cyan-500 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
      "greenToBlue": "bg-gradient-to-br from-green-400 to-cyan-600 text-white focus:ring-4 focus:ring-green-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-green-800",
      "pinkToOrange": "bg-gradient-to-br from-pink-500 to-orange-400 text-white focus:ring-4 focus:ring-pink-200 enabled:hover:bg-gradient-to-bl dark:focus:ring-pink-800",
      "purpleToBlue": "bg-gradient-to-br from-purple-600 to-cyan-500 text-white focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800",
      "purpleToPink": "bg-gradient-to-r from-purple-500 to-pink-500 text-white focus:ring-4 focus:ring-purple-200 enabled:hover:bg-gradient-to-l dark:focus:ring-purple-800",
      "redToYellow": "bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-gray-900 focus:ring-4 focus:ring-red-100 enabled:hover:bg-gradient-to-bl dark:focus:ring-red-400",
      "tealToLime": "bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 focus:ring-4 focus:ring-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 dark:focus:ring-teal-700"
    },
    "inner": {
      "base": "flex items-stretch transition-all duration-200",
      "position": {
        "none": "",
        "start": "rounded-r-none",
        "middle": "rounded-none",
        "end": "rounded-l-none"
      },
      "outline": "border border-transparent",
      "isProcessingPadding": {
        "xs": "pl-8",
        "sm": "pl-10",
        "md": "pl-12",
        "lg": "pl-16",
        "xl": "pl-20"
      }
    },
    "label": "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
    "outline": {
      "color": {
        "gray": "border border-gray-900 dark:border-white",
        "default": "border-0",
        "light": ""
      },
      "off": "",
      "on": "flex w-full justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white",
      "pill": {
        "off": "rounded-md",
        "on": "rounded-full"
      }
    },
    "pill": {
      "off": "rounded-lg",
      "on": "rounded-full"
    },
    "size": {
      "xs": "px-2 py-1 text-xs",
      "sm": "px-3 py-1.5 text-sm",
      "md": "px-4 py-2 text-sm",
      "lg": "px-5 py-2.5 text-base",
      "xl": "px-6 py-3 text-base"
    }
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
          "gray": "border-white text-white bg-primary placeholder-white focus:border-accent focus:ring-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-200 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "info": "border-transparent text-accent bg-light placeholder-gray shadow-lg focus:border-accent focus:ring-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-200 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
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
  },
  dropdown: {
    "arrowIcon": "ml-2 h-4 w-4",
    "content": "py-1 focus:outline-none",
    "floating": {
      "animation": "transition-opacity",
      "arrow": {
        "base": "absolute z-10 h-2 w-2 rotate-45",
        "style": {
          "dark": "bg-gray-900 dark:bg-gray-700",
          "light": "bg-white",
          "auto": "bg-white dark:bg-gray-700"
        },
        "placement": "-4px"
      },
      "base": "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      "content": "py-1 text-sm text-gray-700 dark:text-gray-200",
      "divider": "my-1 h-px bg-gray-100 dark:bg-gray-600",
      "header": "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
      "hidden": "invisible opacity-0",
      "item": {
        "container": "",
        "base": "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        "icon": "mr-2 h-4 w-4"
      },
      "style": {
        "dark": "bg-gray-900 text-white dark:bg-gray-700",
        "light": "border border-gray-200 bg-white text-gray-900",
        "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
      },
      "target": "w-fit"
    },
    "inlineWrapper": "flex items-center"
  },
  textarea: {
    "base": "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50",
    "colors": {
      "gray": "border-white text-white bg-primary placeholder-white focus:border-accent focus:ring-accent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-200 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
      "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
    },
    "withShadow": {
      "on": "shadow-sm dark:shadow-sm-light",
      "off": ""
    }
  },
  label: {
    "root": {
      "base": "text-sm font-medium",
      "disabled": "opacity-50",
      "colors": {
        "default": "text-primary dark:text-white",
        "info": "text-cyan-500 dark:text-cyan-600",
        "failure": "text-red-700 dark:text-red-500",
        "warning": "text-yellow-500 dark:text-yellow-600",
        "success": "text-green-700 dark:text-green-500"
      }
    }
  },
  fileInput: {
    "root": {
      "base": "flex"
    },
    "field": {
      "base": "relative w-full",
      "input": {
        "base": "block w-full overflow-hidden rounded-lg border disabled:cursor-not-allowed disabled:opacity-50",
        "sizes": {
          "sm": "sm:text-xs",
          "md": "text-sm",
          "lg": "sm:text-base"
        },
        "colors": {
          "gray": "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "info": "border-primary bg-light text-accent placeholder-light focus:border-accent focus:ring-accent dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        }
      }
    }
  }
};

export default herraTheme;
