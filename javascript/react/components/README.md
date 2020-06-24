# Components Project

## Outline
Uses Semantic UI for css styling
Uses faker.js for avatar pictures
```bash
npm install --save faker
```
Generating a random avatar picture can be done with
```javascript
import faker from 'faker';

const App = () => <img alt="avatar" src={faker.image.avatar()}/>

```

## Learnings

- Components are the exception to the JSX rule, they are import as < tags /> and not { } syntax.
- Components do not need to be self closing, to put a component inside enclose like normal html
```html
<Component><AnotherComponent /></Component>
```
within component we can reference AnotherComponent with
```javascript
props.children
```

## Tutorial
1. Refactor the following JSX into a CommentDetail component
```html
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
    ```
2. Use props to set author, time, content and avatar from App.js
3. Create ApprovalCard component that wraps CommentDetail with Approve and Reject Buttons underneath.
