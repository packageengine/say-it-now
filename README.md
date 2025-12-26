# 🎭 just-say-it

> **The package that says what you're thinking, but probably shouldn't say out loud.**

Tired of coming up with polite ways to say "no"? Need a joke that's guaranteed to make someone groan? Want motivation but don't want to scroll through Instagram? 

**just-say-it** is here to save the day (and your social life). A zero-dependency npm package that gives you the perfect response for every awkward situation. Because sometimes, you need a friend who's always ready with the right words.

---

## 🎪 What's This All About?

Imagine having a friend who:
- ✅ Always knows how to politely decline that MLM invitation
- ✅ Has a joke ready when the conversation dies
- ✅ Knows exactly what to say when you need motivation
- ✅ Never runs out of ways to say "thank you" or "sorry"

That's **just-say-it**. Your new best friend in code form.

---

## 🚀 Installation (It's Super Easy, Promise)

```bash
npm install say-it-now
```

That's it. No configuration. No setup. No "please configure your environment variables" nonsense. Just install and go. We're not here to waste your time.

---

## 💡 Quick Start (Because Life's Too Short)

### The Basics: Getting a Response

**JavaScript/CommonJS:**
```javascript
const { justSayIt } = require('say-it-now');

// Need to say no? We've got 10 different ways!
console.log(justSayIt('no'));
// "Thanks, but no thanks." ✨

// Want a joke? We've got dad jokes ready!
console.log(justSayIt('joke'));
// "Why don't scientists trust atoms? Because they make up everything!" 😂

// Monday morning motivation?
console.log(justSayIt('motivation'));
// "You've got this!" 💪
```

**TypeScript/ES Modules:**
```typescript
import { justSayIt, ResponseType } from 'say-it-now';

const joke: string = justSayIt('joke');
const motivation: string = justSayIt('motivation' as ResponseType);
```

### Want More Info? We've Got You Covered

```javascript
const { justSayItWithType, getAvailableTypes } = require('say-it-now');

// Get response with metadata (for the organized folks)
const result = justSayItWithType({ type: 'yes' });
console.log(result);
// { type: 'yes', message: 'Yes, absolutely!' }

// See what's available (because options are nice)
const types = getAvailableTypes();
console.log(types);
// ['no', 'yes', 'maybe', 'joke', 'motivation', 'thank-you', 'apology']
```

### Backward Compatibility (For Existing Code)

Don't worry if you're using the old function names - they still work! We've got your back:

```javascript
const { saySomething, saySomethingWithType } = require('say-it-now');

// These still work (but we recommend using justSayIt)
saySomething('joke');
saySomethingWithType({ type: 'motivation' });
```

---

## 🎯 The 7 Response Types (Your New Best Friends)

| Type | What It Does | When to Use |
|------|-------------|-------------|
| 🚫 **`no`** | Polite ways to decline | When your friend asks you to join their MLM |
| ✅ **`yes`** | Enthusiastic affirmations | When you're feeling optimistic (rare, but it happens) |
| 🤷 **`maybe`** | Non-committal responses | When you want to keep your options open |
| 😂 **`joke`** | Random jokes | When the conversation dies and you need to break the ice |
| 💪 **`motivation`** | Inspirational quotes | Monday mornings, deadlines, life in general |
| 🙏 **`thank-you`** | Gratitude expressions | When someone does something nice (remember those?) |
| 😔 **`apology`** | Sincere apologies | When your code breaks production (again) |

---

## 🌐 HTTP Server Mode (For the API Enthusiasts)

Want to use this as a microservice? We've got you covered!

### Start the Server

```bash
npm start
# or
node dist/server.js
```

### Use It Like a Pro

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

### Available Endpoints

- `GET /` - API info and available types (the welcome mat)
- `GET /all` - List all response types (for the curious)
- `GET /:type` - Get a random response (plain text, because simple is good)
- `GET /:type?format=json` - Get response with metadata (for the data lovers)

### Custom Port? No Problem!

```bash
PORT=8080 HOST=0.0.0.0 npm start
```

Or programmatically:

```javascript
const { startServer } = require('say-it-now/dist/server');

const server = await startServer({ port: 8080, host: '0.0.0.0' });
```

---

## 💻 CLI Mode (For Terminal Warriors)

```bash
# Get a quick response
just-say-it joke
just-say-it motivation
just-say-it no

# Want JSON? We've got you covered
just-say-it yes --json

# See what's available
just-say-it --list

# Need help? (We all do sometimes)
just-say-it --help
```

---

## 🎬 Real-World Examples (Because Examples Are Everything)

### Example 1: The Polite Decliner Bot

```javascript
const express = require('express');
const { justSayIt } = require('say-it-now');
const app = express();

app.post('/decline', (req, res) => {
  const politeNo = justSayIt('no');
  res.json({ message: politeNo });
});

// When someone asks you to join their MLM:
// Response: "Thanks, but no thanks." ✨
```

### Example 2: The Monday Morning Motivator

```javascript
const { justSayIt } = require('say-it-now');

function mondayMotivation() {
  return justSayIt('motivation');
}

console.log(mondayMotivation());
// "You've got this!" 💪
// (Coffee not included, but highly recommended)
```

### Example 3: The Apologetic Developer

```javascript
const { justSayIt } = require('say-it-now');

function apologizeForBreakingProduction() {
  return justSayIt('apology');
}

console.log(apologizeForBreakingProduction());
// "I sincerely apologize." 😔
// (We've all been there)
```

---

## 📚 API Reference (For the Detail-Oriented)

### `justSayIt(type?: ResponseType): string`

Returns a random response message. Defaults to `'no'` (because sometimes you just need to say no).

```javascript
justSayIt('joke');  // Returns a random joke
justSayIt();        // Returns a random "no" (default)
```

**Throws:** `Error` if the type is invalid (we're helpful like that)

### `justSayItWithType(options?: JustSayItOptions): JustSayItResult`

Returns an object with both the type and message (for when you need metadata).

```javascript
justSayItWithType({ type: 'motivation' });
// { type: 'motivation', message: 'You've got this!' }
```

**Throws:** `Error` if the type is invalid

**Note:** Legacy function `saySomething()` is still available for backward compatibility.

### `getAvailableTypes(): ResponseType[]`

Returns an array of all available response types (because knowing your options is important).

```javascript
getAvailableTypes();
// ['no', 'yes', 'maybe', 'joke', 'motivation', 'thank-you', 'apology']
```

### `isValidType(type: string): type is ResponseType`

Type guard to check if a string is a valid response type (TypeScript users, this one's for you).

```javascript
isValidType('joke');     // true
isValidType('invalid');  // false
```

### Backward Compatibility

For existing code using the old function names, these are still available:

- `saySomething(type)` → alias for `justSayIt(type)`
- `saySomethingWithType(options)` → alias for `justSayItWithType(options)`
- `SaySomethingOptions` → alias for `JustSayItOptions`
- `SaySomethingResult` → alias for `JustSayItResult`

We recommend migrating to the new names, but your existing code will continue to work.

---

## 🏗️ Architecture (For the Curious Minds)

Built with production-grade practices (because we're professionals, even if we don't act like it):

- **Modular Design**: Each response type lives in its own file (`src/responses/no.ts`, `yes.ts`, etc.)
- **Zero Dependencies**: Uses only Node.js built-in modules (no `node_modules` bloat!)
- **TypeScript First**: Fully typed with TypeScript definitions included
- **Lightweight**: Small footprint, fast performance (we're not here to slow you down)
- **Flexible**: Use it as a library, HTTP server, or CLI tool (your choice!)

---

## 🧪 Testing (Because Quality Matters)

We've got comprehensive tests to make sure everything works perfectly:

```bash
# Run all core tests (41 tests)
npm test

# Run HTTP server tests
npm run test:server

# Run everything
npm run test:all
```

**Test Coverage:**
- ✅ All 7 response types
- ✅ Function functionality and error handling
- ✅ Type validation
- ✅ Data integrity
- ✅ Randomness verification
- ✅ Edge cases
- ✅ Backward compatibility
- ✅ Performance benchmarks

All tests pass before publishing (thanks to `prepublishOnly` hook). We take quality seriously (but not ourselves).

---

## 🛠️ Development (For Contributors and Customizers)

Want to add your own responses? Go for it!

```bash
# Clone the repo
git clone https://github.com/packageengine/just-say-it.git
cd just-say-it

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Run in development mode
npm run dev
```

### Adding Your Own Responses

Each response type is in its own file. Want to add more jokes? Edit `src/responses/joke.ts`. Want more ways to say no? Edit `src/responses/no.ts`. It's that simple.

After editing, rebuild:
```bash
npm run build
```

---

## 🤔 FAQ (Frequently Asked Questions, Because We're Helpful)

**Q: Why would I need this?**  
A: Because sometimes you need a random joke, a polite "no", or motivation at 3 AM. We've all been there. Don't judge.

**Q: Is this serious?**  
A: Yes and no. It's a real, functional package that works perfectly. But we don't take ourselves too seriously. Life's too short for that.

**Q: Can I add my own responses?**  
A: Absolutely! Each response type is in its own file. Just edit `src/responses/[type].ts` and rebuild. We believe in customization.

**Q: Why zero dependencies?**  
A: Because we believe in keeping things simple. No bloat, no drama, just pure functionality. Your `node_modules` folder will thank you.

**Q: What's the best response type?**  
A: Trick question! They're all equally amazing. But if we had to pick... `joke`. Always `joke`. Laughter is the best medicine (and we're not doctors, so don't quote us on that).

**Q: Can I use this in production?**  
A: Absolutely! It's built with production-grade practices. Just remember: with great power comes great responsibility (and great jokes).

**Q: Is it tested?**  
A: You bet! We have 41+ comprehensive tests covering everything from basic functionality to edge cases. Run `npm test` to see for yourself.

---

## 📝 License

MIT License - because sharing is caring, and we care about your freedom to use this however you want. Go wild. (But responsibly, please.)

---

## 💝 Contributing

Found a typo? Want to add more responses? Have a better joke? We'd love your help! 

Just remember: keep it clean, keep it fun, and keep it simple. We're here to make people smile, not to complicate their lives.

---

## 🌟 Star This Repo (If You're Feeling Generous)

If this package made you smile (or at least didn't make you cry), consider giving it a star. It makes us feel warm and fuzzy inside.

---

**Made with ❤️ and a healthy dose of humor**

*Because the world needs more random jokes and polite "no"s.*

---

## 🔗 Links

- **GitHub**: https://github.com/packageengine/just-say-it
- **NPM**: https://www.npmjs.com/package/say-it-now

---

*P.S. - If you're reading this, you're awesome. Keep being awesome. And remember: sometimes the best response is just saying something.*
