import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CheatSheetDetail = () => {
  const { id } = useParams();
  const [copiedId, setCopiedId] = useState(null);

  const allCheatSheets = {
    nodejs: {
      title: "Node.js Cheat Sheet",
      desc: "Essential Node.js runtime commands and patterns.",
      version: "v20.x",
      sections: [
        {
          title: "Setup & Run",
          items: [
            { label: "Run script", code: "node app.js" },
            { label: "Run with watch", code: "node --watch app.js" },
            { label: "Check version", code: "node -v" },
            { label: "REPL mode", code: "node" }
          ]
        },
        {
          title: "Core Modules",
          items: [
            { label: "Import syntax (CJS)", code: "const fs = require('fs');" },
            { label: "Import syntax (ESM)", code: "import fs from 'fs';" },
            { label: "Path join", code: "path.join(__dirname, 'file.txt')" },
            { label: "Read file sync", code: "fs.readFileSync('file.txt', 'utf8')" }
          ]
        },
        {
          title: "Creating a Server",
          items: [
            {
              label: "Basic HTTP Server",
              code: `const http = require('node:http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello World');\n});\n\nserver.listen(3000);`
            }
          ]
        },
        {
          title: "Express Basics",
          items: [
            { label: "Init App", code: "const app = express();" },
            { label: "Listen", code: "app.listen(3000, () => console.log('Running'));" },
            { label: "GET Route", code: "app.get('/', (req, res) => res.send('Hi'));" },
            { label: "POST Route", code: "app.post('/data', (req, res) => res.json(req.body));" }
          ]
        },
        {
          title: "Streams & Buffers (Intermediate)",
          items: [
            { label: "Pipe Stream", code: "fs.createReadStream('in.txt').pipe(res);" },
            { label: "Buffer alloc", code: "const buf = Buffer.alloc(10);" },
            { label: "Buffer from string", code: "const buf = Buffer.from('hello');" }
          ]
        },
        {
          title: "Concurrency & Performance (Advanced)",
          items: [
            { label: "Cluster Mode", code: "const cluster = require('cluster');\nif (cluster.isPrimary) {\n  cluster.fork();\n}" },
            { label: "Worker Threads", code: "const { Worker } = require('worker_threads');\nnew Worker('./worker.js');" },
            { label: "Increase Memory", code: "node --max-old-space-size=4096 app.js" },
            { label: "Event Loop", code: "process.nextTick(() => console.log('Priority'));" }
          ]
        }
      ]
    },
    git: {
      title: "Git Cheat Sheet",
      desc: "Essential Git commands for version control.",
      version: "v2.4x",
      sections: [
        {
          title: "Configuration",
          items: [
            { label: "Set Name", code: 'git config --global user.name "John Doe"' },
            { label: "Set Email", code: 'git config --global user.email "john@example.com"' },
            { label: "Show Config", code: "git config --list" }
          ]
        },
        {
          title: "Core Commands",
          items: [
            { label: "Initialize", code: "git init" },
            { label: "Clone Repo", code: "git clone <url>" },
            { label: "Check Status", code: "git status" },
            { label: "Add File", code: "git add file.txt" },
            { label: "Add All", code: "git add ." },
            { label: "Commit", code: 'git commit -m "Message"' }
          ]
        },
        {
          title: "Branching",
          items: [
            { label: "List Branches", code: "git branch" },
            { label: "New Branch", code: "git branch <name>" },
            { label: "Switch Branch", code: "git checkout <name>" },
            { label: "Create & Switch", code: "git checkout -b <name>" },
            { label: "Merge Branch", code: "git merge <name>" }
          ]
        },
        {
          title: "Remote & Sync",
          items: [
            { label: "Add Remote", code: "git remote add origin <url>" },
            { label: "Push", code: "git push origin main" },
            { label: "Pull", code: "git pull origin main" },
            { label: "Fetch", code: "git fetch" }
          ]
        }
      ]
    },
    react: {
      title: "React Cheat Sheet",
      desc: "Hooks, Components and Patterns for React.",
      version: "v19",
      sections: [
        {
          title: "Components",
          items: [
            { label: "Functional Component", code: "const Component = () => {\n  return <div>Hello</div>;\n};" },
            { label: "Props", code: "const Welcome = ({ name }) => <h1>Hello, {name}</h1>;" },
            { label: "Fragment", code: "<>\n  <Header />\n  <Footer />\n</>" }
          ]
        },
        {
          title: "Hooks",
          items: [
            { label: "useState", code: "const [count, setCount] = useState(0);" },
            { label: "useEffect", code: "useEffect(() => {\n  document.title = count;\n}, [count]);" },
            { label: "useContext", code: "const value = useContext(MyContext);" },
            { label: "useRef", code: "const inputRef = useRef(null);" }
          ]
        },
        {
          title: "Advanced Hooks & Patterns",
          items: [
            { label: "useReducer", code: "const [state, dispatch] = useReducer(reducer, initialState);" },
            { label: "useMemo", code: "const cached = useMemo(() => compute(a, b), [a, b]);" },
            { label: "useCallback", code: "const fn = useCallback(() => doSomething(a), [a]);" },
            { label: "Custom Hook", code: "const useWindowSize = () => {\n  const [size, setSize] = useState(...);\n  return size;\n};" }
          ]
        },
        {
          title: "Performance & Architecture (Advanced)",
          items: [
            { label: "React.memo", code: "const Memoized = React.memo(MyComponent);" },
            { label: "Lazy Load", code: "const OtherComponent = React.lazy(() => import('./OtherComponent'));" },
            { label: "Portals", code: "createPortal(<Modal />, document.body);" },
            { label: "Error Boundary", code: "static getDerivedStateFromError(error) {\n  return { hasError: true };\n}" }
          ]
        }
      ]
    },
    express: {
      title: "Express.js Cheat Sheet",
      desc: "Fast, unopinionated, minimalist web framework for Node.js.",
      version: "v5.0",
      sections: [
        {
          title: "Setup",
          items: [
            { label: "Install", code: "npm install express" },
            { label: "Hello World", code: "const express = require('express')\nconst app = express()\n\napp.get('/', function (req, res) {\n  res.send('Hello World')\n})\n\napp.listen(3000)" }
          ]
        },
        {
          title: "Routing",
          items: [
            { label: "Basic Routing", code: "app.METHOD(PATH, HANDLER)" },
            { label: "Route Parameters", code: "app.get('/users/:userId/books/:bookId', (req, res) => {\n  res.send(req.params)\n})" }
          ]
        }
      ]
    },
    python: {
      title: "Python Cheat Sheet",
      desc: "Syntax reference for Python programming language.",
      version: "3.12",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Print", code: 'print("Hello World")' },
            { label: "Variables", code: "x = 5\ny = 'John'" },
            { label: "Type conversion", code: "str(10), int('10'), float(10)" }
          ]
        },
        {
          title: "Data Structures",
          items: [
            { label: "List", code: "fruits = ['apple', 'banana', 'cherry']" },
            { label: "Dict", code: "person = {'name': 'John', 'age': 30}" },
            { label: "Tuple", code: "coords = (10.0, 20.0)" }
          ]
        },
        {
          title: "Intermediate Python",
          items: [
            { label: "List Comprehension", code: "squares = [x**2 for x in range(10)]" },
            { label: "Lambda", code: "add = lambda x, y: x + y" },
            { label: "File I/O", code: "with open('file.txt', 'r') as f:\n    content = f.read()" },
            { label: "Exception Handling", code: "try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('Error')" }
          ]
        },
        {
          title: "Advanced Concepts",
          items: [
            { label: "Decorators", code: "@my_decorator\ndef func():\n    pass" },
            { label: "Generators", code: "def gen():\n    yield 1\n    yield 2" },
            { label: "Context Manager", code: "class ManagedFile:\n    def __enter__(self): pass\n    def __exit__(self, *args): pass" },
            { label: "AsyncIO", code: "import asyncio\nasync def main():\n    await asyncio.sleep(1)" }
          ]
        }
      ]
    },
    docker: {
      title: "Docker Cheat Sheet",
      desc: "Common Docker CLI commands and usage.",
      version: "v24",
      sections: [
        {
          title: "Images",
          items: [
            { label: "List Images", code: "docker images" },
            { label: "Build Image", code: "docker build -t my-app ." },
            { label: "Pull Image", code: "docker pull ubuntu" }
          ]
        },
        {
          title: "Containers",
          items: [
            { label: "Run Container", code: "docker run -d -p 80:80 my-app" },
            { label: "List Containers", code: "docker ps -a" },
            { label: "Stop Container", code: "docker stop <container_id>" },
            { label: "Remove Container", code: "docker rm <container_id>" }
          ]
        }
      ]
    },
    typescript: {
      title: "TypeScript Cheat Sheet",
      desc: "Static types for JavaScript.",
      version: "v5.3",
      sections: [
        {
          title: "Basic Types",
          items: [
            { label: "Primitives", code: "let isDone: boolean = false;\nlet lines: number = 42;\nlet name: string = 'Anders';" },
            { label: "Arrays", code: "let list: number[] = [1, 2, 3];" },
            { label: "Any", code: "let notSure: any = 4;" }
          ]
        },
        {
          title: "Interfaces",
          items: [
            { label: "Define Interface", code: "interface User {\n  name: string;\n  id: number;\n}" },
            { label: "Optional Prop", code: "interface User {\n  age?: number;\n}" }
          ]
        }
      ]
    },
    css: {
      title: "CSS Cheat Sheet",
      desc: "Style sheet language used for describing the presentation of a document.",
      version: "Lev 3",
      sections: [
        {
          title: "Flexbox",
          items: [
            { label: "Container", code: "display: flex;" },
            { label: "Direction", code: "flex-direction: row | row-reverse | column | column-reverse;" },
            { label: "Justify Content", code: "justify-content: flex-start | flex-end | center | space-between;" },
            { label: "Align Items", code: "align-items: stretch | flex-start | flex-end | center;" }
          ]
        },
        {
          title: "Grid",
          items: [
            { label: "Container", code: "display: grid;" },
            { label: "Columns", code: "grid-template-columns: repeat(3, 1fr);" },
            { label: "Gap", code: "gap: 10px;" }
          ]
        }
      ]
    },
    bash: {
      title: "Bash Cheat Sheet",
      desc: "Unix shell and command language.",
      version: "v5",
      sections: [
        {
          title: "File Operations",
          items: [
            { label: "List Files", code: "ls -la" },
            { label: "Copy", code: "cp source dest" },
            { label: "Move", code: "mv source dest" },
            { label: "Delete", code: "rm -rf folder" }
          ]
        },
        {
          title: "Navigation",
          items: [
            { label: "Print Working Directory", code: "pwd" },
            { label: "Change Directory", code: "cd /path/to/dir" }
          ]
        }
      ]
    },
    vim: {
      title: "Vim Cheat Sheet",
      desc: "Highly configurable text editor built to make creating and changing any kind of text very efficient.",
      version: "9.0",
      sections: [
        {
          title: "Modes",
          items: [
            { label: "Normal Mode", code: "Esc" },
            { label: "Insert Mode", code: "i" },
            { label: "Visual Mode", code: "v" },
            { label: "Command Mode", code: ":" }
          ]
        },
        {
          title: "Navigation",
          items: [
            { label: "Left", code: "h" },
            { label: "Down", code: "j" },
            { label: "Up", code: "k" },
            { label: "Right", code: "l" },
            { label: "Start of file", code: "gg" },
            { label: "End of file", code: "G" }
          ]
        },
        {
          title: "Editing",
          items: [
            { label: "Undo", code: "u" },
            { label: "Redo", code: "Ctrl + r" },
            { label: "Copy Line", code: "yy" },
            { label: "Paste", code: "p" }
          ]
        }
      ]
    },
    sql: {
      title: "SQL Cheat Sheet",
      desc: "Domain-specific language used in programming and designed for managing data held in a relational database management system.",
      version: "Std",
      sections: [
        {
          title: "Queries",
          items: [
            { label: "Select All", code: "SELECT * FROM table_name;" },
            { label: "Start With", code: "SELECT * FROM Customers\nWHERE City LIKE 'a%';" }
          ]
        },
        {
          title: "Manipulation",
          items: [
            { label: "Insert", code: "INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);" },
            { label: "Update", code: "UPDATE table_name\nSET column1 = value1\nWHERE condition;" },
            { label: "Delete", code: "DELETE FROM table_name WHERE condition;" }
          ]
        }
      ]
    },
    regex: {
      title: "Regex Cheat Sheet",
      desc: "Sequence of characters that specify a search pattern.",
      version: "PCRE",
      sections: [
        {
          title: "Anchors",
          items: [
            { label: "Start of String", code: "^" },
            { label: "End of string", code: "$" },
            { label: "Word boundary", code: "\\b" }
          ]
        },
        {
          title: "Quantifiers",
          items: [
            { label: "Zero or more", code: "*" },
            { label: "One or more", code: "+" },
            { label: "Zero or one", code: "?" },
            { label: "n times", code: "{3}" }
          ]
        },
        {
          title: "Character Classes",
          items: [
            { label: "Digit", code: "\\d" },
            { label: "Word character", code: "\\w" },
            { label: "Whitespace", code: "\\s" },
            { label: "Any character", code: "." }
          ]
        }
      ]
    },
    java: {
      title: "Java Cheat Sheet",
      desc: "Object-oriented programming language.",
      version: "21",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Main Method", code: "public static void main(String[] args) {\n  System.out.println(\"Hello\");\n}" },
            { label: "Variables", code: "int x = 5;\nString name = \"Java\";" },
            { label: "Loop", code: "for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}" }
          ]
        },
        {
          title: "OOP",
          items: [
            { label: "Class", code: "public class Dog {\n  String breed;\n  public void bark() {}\n}" },
            { label: "Inheritance", code: "public class Poodle extends Dog {}" }
          ]
        }
      ]
    },
    cpp: {
      title: "C++ Cheat Sheet",
      desc: "High-performance programming language.",
      version: "20",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Main", code: "#include <iostream>\nint main() {\n  std::cout << \"Hello\";\n  return 0;\n}" },
            { label: "Pointers", code: "int x = 10;\nint* ptr = &x;" },
            { label: "Reference", code: "int& ref = x;" }
          ]
        },
        {
          title: "STL",
          items: [
            { label: "Vector", code: "std::vector<int> v = {1, 2, 3};\nv.push_back(4);" },
            { label: "Map", code: "std::map<string, int> m;\nm[\"key\"] = 10;" }
          ]
        }
      ]
    },
    go: {
      title: "Go Cheat Sheet",
      desc: "Statically typed, compiled language designed at Google.",
      version: "1.22",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Main", code: "package main\nimport \"fmt\"\nfunc main() {\n  fmt.Println(\"Hello\")\n}" },
            { label: "Variables", code: "var x int = 5\ny := 10" }
          ]
        },
        {
          title: "Concurrency",
          items: [
            { label: "Goroutine", code: "go doSomething()" },
            { label: "Channel", code: "ch := make(chan int)\nch <- 1 // send\nval := <-ch // receive" }
          ]
        }
      ]
    },
    rust: {
      title: "Rust Cheat Sheet",
      desc: "Language empowering everyone to build reliable and efficient software.",
      version: "1.75",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Main", code: "fn main() {\n  println!(\"Hello\");\n}" },
            { label: "Variables", code: "let x = 5;\nlet mut y = 10;" }
          ]
        },
        {
          title: "Ownership",
          items: [
            { label: "Move", code: "let s1 = String::from(\"hello\");\nlet s2 = s1; // s1 invalid" },
            { label: "Borrow", code: "let len = calculate_length(&s1);" }
          ]
        }
      ]
    },
    php: {
      title: "PHP Cheat Sheet",
      desc: "Server-side scripting language suited for web development.",
      version: "8.3",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Variables", code: "$name = 'John';\n$age = 25;" },
            { label: "Echo", code: "echo 'Hello ' . $name;" },
            { label: "Arrays", code: "$colors = ['red', 'green', 'blue'];" },
            { label: "Assoc Array", code: "$user = ['name' => 'John', 'age' => 30];" }
          ]
        },
        {
          title: "Functions",
          items: [
            { label: "Define", code: "function add($a, $b) {\n  return $a + $b;\n}" },
            { label: "Arrow Fn", code: "$add = fn($a, $b) => $a + $b;" }
          ]
        },
        {
          title: "Database (PDO)",
          items: [
            { label: "Connect", code: "$pdo = new PDO('mysql:host=localhost;dbname=test', $user, $pass);" },
            { label: "Query", code: "$stmt = $pdo->query('SELECT * FROM users');\n$users = $stmt->fetchAll();" }
          ]
        }
      ]
    },
    ruby: {
      title: "Ruby Cheat Sheet",
      desc: "Dynamic, open source programming language with a focus on simplicity and productivity.",
      version: "3.3",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Variables", code: "name = 'John'\nage = 25" },
            { label: "Output", code: "puts 'Hello World'" },
            { label: "Interpolation", code: "puts \"Hello #{name}\"" },
            { label: "Symbols", code: ":status" }
          ]
        },
        {
          title: "Control Flow",
          items: [
            { label: "If/Else", code: "if x > 10\n  puts 'Big'\nelse\n  puts 'Small'\nend" },
            { label: "Unless", code: "puts 'Ok' unless error" }
          ]
        },
        {
          title: "Blocks & Iterators",
          items: [
            { label: "Each", code: "[1, 2, 3].each do |n|\n  puts n\nend" },
            { label: "Map", code: "[1, 2, 3].map { |n| n * 2 }" }
          ]
        }
      ]
    },
    swift: {
      title: "Swift Cheat Sheet",
      desc: "Powerful and intuitive programming language for Apple platforms.",
      version: "5.9",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Variables", code: "var myVariable = 42\nmyVariable = 50" },
            { label: "Constants", code: "let myConstant = 42" },
            { label: "Print", code: "print(\"Hello, world!\")" }
          ]
        },
        {
          title: "Control Flow",
          items: [
            { label: "For Loop", code: "for i in 0..<5 {\n    print(i)\n}" },
            { label: "Switch", code: "switch val {\ncase 1:\n    print(\"One\")\ndefault:\n    print(\"Other\")\n}" }
          ]
        },
        {
          title: "Functions",
          items: [
            { label: "Define", code: "fun greet(name: String) -> String {\n    return \"Hello, \\(name).\"\n}" }
          ]
        }
      ]
    },
    kotlin: {
      title: "Kotlin Cheat Sheet",
      desc: "Concise, cross-platform language for Android and more.",
      version: "1.9",
      sections: [
        {
          title: "Basics",
          items: [
            { label: "Variables", code: "val name = \"John\" // Read-only\nvar age = 25 // Mutable" },
            { label: "Nullable", code: "var name: String? = null" },
            { label: "Print", code: "println(\"Hello, $name!\")" }
          ]
        },
        {
          title: "Functions",
          items: [
            { label: "Define", code: "fun sum(a: Int, b: Int): Int {\n    return a + b\n}" },
            { label: "Single Expression", code: "fun sum(a: Int, b: Int) = a + b" }
          ]
        },
        {
          title: "Classes",
          items: [
            { label: "Data Class", code: "data class User(val name: String, val age: Int)" }
          ]
        }
      ]
    },
    html: {
      title: "HTML5 Cheat Sheet",
      desc: "Standard markup language for documents designed to be displayed in a web browser.",
      version: "5.2",
      sections: [
        { title: "Structure", items: [{ label: "Boilerplate", code: "<!DOCTYPE html>\n<html>\n<body>\n</body>\n</html>" }] }
      ]
    },
    sass: {
      title: "SASS/SCSS Cheat Sheet",
      desc: "CSS extension language.",
      version: "1.70",
      sections: [
        { title: "Features", items: [{ label: "Variables", code: "$primary: #333;" }, { label: "Nesting", code: ".nav {\n  ul {\n    margin: 0;\n  }\n}" }] }
      ]
    },
    tailwind: {
      title: "Tailwind CSS Cheat Sheet",
      desc: "Utility-first CSS framework.",
      version: "v3.4",
      sections: [
        { title: "Layout", items: [{ label: "Flex", code: "flex flex-col items-center justify-center" }, { label: "Grid", code: "grid grid-cols-3 gap-4" }] }
      ]
    },
    vue: {
      title: "Vue.js Cheat Sheet",
      desc: "Progressive JavaScript Framework.",
      version: "v3",
      sections: [
        { title: "Basics", items: [{ label: "Composition API", code: "<script setup>\nimport { ref } from 'vue'\nconst count = ref(0)\n</script>" }] }
      ]
    },
    angular: {
      title: "Angular Cheat Sheet",
      desc: "Platform for building mobile and desktop web applications.",
      version: "v17",
      sections: [
        { title: "Component", items: [{ label: "Decorator", code: "@Component({\n  selector: 'app-root',\n  templateUrl: './app.component.html'\n})" }] }
      ]
    },
    svelte: {
      title: "Svelte Cheat Sheet",
      desc: "Cybernetically enhanced web apps.",
      version: "v4",
      sections: [
        { title: "Script", items: [{ label: "Reactive", code: "<script>\n  let count = 0;\n  $: doubled = count * 2;\n</script>" }] }
      ]
    },
    nextjs: {
      title: "Next.js Cheat Sheet",
      desc: "The React Framework for the Web.",
      version: "v14",
      sections: [
        { title: "Routing", items: [{ label: "Page", code: "export default function Page() {\n  return <h1>Hello</h1>\n}" }] }
      ]
    },
    graphql: {
      title: "GraphQL Cheat Sheet",
      desc: "Query language for APIs.",
      version: "Spec",
      sections: [
        { title: "Operations", items: [{ label: "Query", code: "query {\n  user(id: \"1\") {\n    name\n  }\n}" }] }
      ]
    },
    mongodb: {
      title: "MongoDB Cheat Sheet",
      desc: "Source-available cross-platform document-oriented database program.",
      version: "v7.0",
      sections: [
        { title: "CRUD", items: [{ label: "Find", code: "db.collection.find({ age: { $gt: 18 } })" }] }
      ]
    },
    redis: {
      title: "Redis Cheat Sheet",
      desc: "In-memory data structure store.",
      version: "v7.2",
      sections: [
        { title: "Strings", items: [{ label: "Set/Get", code: "SET key value\nGET key" }] }
      ]
    },
    postgresql: {
      title: "PostgreSQL Cheat Sheet",
      desc: "Open source relational database.",
      version: "v16",
      sections: [
        { title: "JSON", items: [{ label: "Query JSON", code: "SELECT info ->> 'name' FROM users;" }] }
      ]
    },
    kubernetes: {
      title: "Kubernetes Cheat Sheet",
      desc: "Container orchestration.",
      version: "v1.29",
      sections: [
        { title: "Pods", items: [{ label: "Get Pods", code: "kubectl get pods" }, { label: "Logs", code: "kubectl logs <pod-name>" }] }
      ]
    },
    aws: {
      title: "AWS CLI Cheat Sheet",
      desc: "Unified tool to manage AWS services.",
      version: "v2",
      sections: [
        { title: "S3", items: [{ label: "List Buckets", code: "aws s3 ls" }, { label: "Copy", code: "aws s3 cp file.txt s3://bucket/" }] }
      ]
    },
    jenkins: {
      title: "Jenkins Cheat Sheet",
      desc: "Open source automation server.",
      version: "LTS",
      sections: [
        { title: "Pipeline", items: [{ label: "Syntax", code: "pipeline {\n  agent any\n  stages {\n    stage('Build') { steps { sh 'make' } }\n  }\n}" }] }
      ]
    },
    terraform: {
      title: "Terraform Cheat Sheet",
      desc: "Infrastructure as Code tool.",
      version: "1.7",
      sections: [
        { title: "Commands", items: [{ label: "Init", code: "terraform init" }, { label: "Apply", code: "terraform apply" }] }
      ]
    },
    ansible: {
      title: "Ansible Cheat Sheet",
      desc: "IT automation tool.",
      version: "2.16",
      sections: [
        { title: "Playbook", items: [{ label: "Run", code: "ansible-playbook playbook.yml" }] }
      ]
    },
    linux: {
      title: "Linux Command Line Cheat Sheet",
      desc: "Common Linux/Unix commands.",
      version: "Std",
      sections: [
        { title: "Permissions", items: [{ label: "Chmod", code: "chmod 755 file" }, { label: "Chown", code: "chown user:group file" }] }
      ]
    },
    powershell: {
      title: "PowerShell Cheat Sheet",
      desc: "Cross-platform task automation solution.",
      version: "v7",
      sections: [
        { title: "Cmdlets", items: [{ label: "Process", code: "Get-Process | Where-Object {$_.CPU -gt 10}" }] }
      ]
    },
    npm: {
      title: "NPM/Yarn Cheat Sheet",
      desc: "Package manager for the web.",
      version: "v10",
      sections: [
        { title: "Commands", items: [{ label: "Install", code: "npm install <pkg>" }, { label: "Run", code: "npm run dev" }] }
      ]
    },


  };

  const cheatSheetData = allCheatSheets[id] || {
    title: "Not Found",
    desc: "This cheat sheet doesn't exist yet.",
    version: "N/A",
    sections: []
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedId(idx);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-ossium-darker text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 px-6 pb-20 max-w-5xl mx-auto w-full">

        {/* Header */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/cheatsheets" className="text-ossium-muted hover:text-white transition-colors text-sm flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Index
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-ossium-accent text-xs font-mono px-2 py-0.5 rounded bg-ossium-accent/10 border border-ossium-accent/20">
              {cheatSheetData.version}
            </span>
          </div>
          <h1 className="text-4xl font-black text-white mb-2">{cheatSheetData.title}</h1>
          <p className="text-lg text-ossium-muted">{cheatSheetData.desc}</p>
        </div>

        {/* Masonry-like Grid for Sections */}
        {cheatSheetData.sections.length > 0 ? (
          <div className="flex flex-col gap-8">
            {cheatSheetData.sections.map((section, sIdx) => (
              <div key={sIdx} className="break-inside-avoid bg-[#121212] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors">
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-ossium-muted text-xs font-mono">{sIdx + 1}</span>
                  {section.title}
                </h2>

                <div className="space-y-6">
                  {section.items.map((item, iIdx) => {
                    const uniqueId = `${sIdx}-${iIdx}`;
                    return (
                      <div key={iIdx} className="group">
                        <div className="flex justify-between items-end mb-1.5">
                          <span className="text-sm text-ossium-muted font-medium ml-1">{item.label}</span>
                          <button
                            onClick={() => handleCopy(item.code, uniqueId)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase font-bold tracking-wider text-ossium-accent hover:text-white"
                          >
                            {copiedId === uniqueId ? 'Copied!' : 'Copy'}
                          </button>
                        </div>
                        <div className="relative">
                          <pre className="overflow-x-auto bg-[#080808] border border-white/5 rounded-lg p-3 text-sm font-mono text-gray-300 leading-relaxed shadow-inner scrollbar-hide">
                            <code>{item.code}</code>
                          </pre>
                          {/* Visual Accent Bar */}
                          <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-ossium-accent/30 rounded-r opacity-50"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="p-4 rounded-full bg-white/5 mb-4">
              <svg className="w-8 h-8 text-ossium-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cheat Sheet Not Found</h3>
            <p className="text-ossium-muted max-w-sm">We couldn't find a cheat sheet for "{id}". It might be coming soon or you may have followed a broken link.</p>
            <Link to="/cheatsheets" className="mt-8 px-6 py-2 bg-ossium-accent text-ossium-darker rounded-lg font-bold hover:opacity-90 transition-opacity">
              Browse All Sheets
            </Link>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default CheatSheetDetail;
