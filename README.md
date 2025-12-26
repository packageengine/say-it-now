# 🎭 say-something

> **Because sometimes you just need someone (or something) to say the right thing.**

Ever wished you had a friend who always knows exactly what to say? Need a quick "no" for that awkward request? Want a random joke to break the ice? Looking for motivation to get through Monday? 

**say-something** is your new best friend - a lightweight, zero-dependency npm package that provides perfectly curated responses for every situation. No AI, no fluff, just the right words when you need them.

---

## ✨ What's Inside the Box?

We've got **7 response types** ready to serve you:

- 🚫 **`no`** - Polite ways to decline (because "no" is a complete sentence, but sometimes you need more words)
- ✅ **`yes`** - Enthusiastic affirmations (for when you're feeling optimistic)
- 🤷 **`maybe`** - Non-committal responses (the Swiss Army knife of answers)
- 😂 **`joke`** - Random jokes (guaranteed to make someone groan)
- 💪 **`motivation`** - Inspirational quotes (for when coffee isn't enough)
- 🙏 **`thank-you`** - Gratitude expressions (because manners matter)
- 😔 **`apology`** - Sincere apologies (for when you need to say sorry properly)

---

## 🚀 Quick Start

### Installation

```bash
npm install say-something
```

That's it. No dependencies. No drama. Just pure, simple functionality.

---

## 💻 Usage

### The Programmatic Way (For Developers Who Like Control)

```typescript
import { saySomething, saySomethingWithType, getAvailableTypes } from 'say-something';

// Need a quick "no"? We've got you covered.
const rejection = saySomething('no');
console.log(rejection); 
// "I'll have to pass on that." (or one of 9 other polite ways to say no)

// Feeling positive? Get a "yes"!
const affirmation = saySomething('yes');
console.log(affirmation);
// "Yes, absolutely!" (or one of 9 other enthusiastic responses)

// Want metadata? We've got that too!
const result = saySomethingWithType({ type: 'joke' });
console.log(result);
// { type: 'joke', message: 'Why don\'t scientists trust atoms? Because they make up everything!' }

// Curious what's available?
const types = getAvailableTypes();
console.log(types);
// ['no', 'yes', 'maybe', 'joke', 'motivation', 'thank-you', 'apology']
```

### The HTTP Way (For API Lovers)

Start the server:

```bash
npm start
# or
node dist/server.js
```

Then hit those endpoints:

```bash
# Get a random joke (because why not?)
curl http://localhost:3000/joke

# Need motivation? We've got you!
curl http://localhost:3000/motivation

# Want JSON? Just ask nicely
curl http://localhost:3000/yes?format=json

# See what's available
curl http://localhost:3000/all
```

**Available Endpoints:**
- `GET /` - API information and available types
- `GET /all` - List all response types
- `GET /:type` - Get a random response (plain text)
- `GET /:type?format=json` - Get a random response with metadata (JSON)

### The CLI Way (For Terminal Warriors)

```bash
# Get a quick response
say-something joke
say-something motivation
say-something no

# Want JSON? We've got you covered
say-something yes --json

# See what's available
say-something --list
```

---

## 🎯 Real-World Use Cases

### Use Case 1: The Polite Decliner
```typescript
// Your friend asks you to join their MLM scheme
const response = saySomething('no');
// "Thanks, but no thanks." ✨
```

### Use Case 2: The Motivational Speaker
```typescript
// Monday morning, need a boost?
const motivation = saySomething('motivation');
// "You've got this!" 💪
```

### Use Case 3: The Joke Master
```typescript
// Breaking the ice at a party
const joke = saySomething('joke');
// "Why don't scientists trust atoms? Because they make up everything!" 😂
```

### Use Case 4: The Apologetic Developer
```typescript
// When your code breaks production (again)
const apology = saySomething('apology');
// "I sincerely apologize." 😔
```

---

## 🏗️ Architecture

Built with production-grade practices:

- **Modular Design**: Each response type lives in its own file (`src/responses/no.ts`, `yes.ts`, etc.)
- **Zero Dependencies**: Uses only Node.js built-in modules (no `node_modules` bloat!)
- **TypeScript First**: Fully typed with TypeScript definitions included
- **Lightweight**: Small footprint, fast performance
- **Flexible**: Use it as a library, HTTP server, or CLI tool

---

## 📚 API Reference

### `saySomething(type?: ResponseType): string`

Returns a random response message. Defaults to `'no'` if no type is specified.

```typescript
saySomething('joke'); // Returns a random joke string
saySomething();        // Returns a random "no" response
```

### `saySomethingWithType(options?: SaySomethingOptions): SaySomethingResult`

Returns an object with both the type and message.

```typescript
saySomethingWithType({ type: 'motivation' });
// { type: 'motivation', message: 'You've got this!' }
```

### `getAvailableTypes(): ResponseType[]`

Returns an array of all available response types.

```typescript
getAvailableTypes();
// ['no', 'yes', 'maybe', 'joke', 'motivation', 'thank-you', 'apology']
```

### `isValidType(type: string): type is ResponseType`

Type guard to check if a string is a valid response type.

```typescript
isValidType('joke');     // true
isValidType('invalid');  // false
```

---

## 🛠️ Development

Want to contribute or customize? Here's how:

```bash
# Clone and install
git clone <your-repo>
cd say-something
npm install

# Build the project
npm run build

# Run in development mode (with auto-reload)
npm run dev
```

---

## 🤔 FAQ

**Q: Why would I need this?**  
A: Because sometimes you need a random joke, a polite "no", or motivation at 3 AM. We've all been there.

**Q: Is this serious?**  
A: Yes and no. It's a real, functional package, but we don't take ourselves too seriously.

**Q: Can I add my own responses?**  
A: Absolutely! Each response type is in its own file. Just edit `src/responses/[type].ts` and rebuild.

**Q: Why zero dependencies?**  
A: Because we believe in keeping things simple. No bloat, no drama, just pure functionality.

**Q: What's the best response type?**  
A: Trick question! They're all equally amazing. But if we had to pick... `joke`. Always `joke`.

---

## 📝 License

MIT License - because sharing is caring, and we care about your freedom to use this however you want.

---

## 💝 Contributing

Found a typo? Want to add more responses? Have a better joke? We'd love your help! 

Just remember: keep it clean, keep it fun, and keep it simple.

---

**Made with ❤️ and a healthy dose of humor**

*Because the world needs more random jokes and polite "no"s.*
