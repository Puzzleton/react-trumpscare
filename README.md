Give your users a Trump-scare! It's like a jump-scare, but with Donald Trump instead.


## Installation

Install using NPM
```bash
npm install --save react-trumpscare
```

or Jest
```
yarn add react-trumpscare
```

## Example

```js
<TrumpScare trigger="reload" />
```

## Change scare image

While you'll probably never find something truly scarier than Donald Trump, you can use the `image` prop to control what image is displayed when the scare happens...

```
<TrumpScare image="..." />
```

## Change TrumpScare behavior

By default, the TrumpScare will randomly occur if the user loads or refreshes your app. You can change this behavior using the `trigger` prop...

Trigger on reload:
```js
<TrumpScare trigger="reload" />
```

Trigger on scroll:

```js
<TrumpScare trigger="scroll" />
```

Trigger randomly, when least expected:

```js
<TrumpScare trigger="random" />
```

---

> "Are you afraid of God?"

– Donald Trump

> "No, but I'm afraid of you."

– Everyone else