import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
         author="Samantha" 
         comment="Great!" 
         date="2:00PM" 
         avatar={ faker.image.avatar() }
       />
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail 
         author="Bruce" 
         comment="Cool" 
         date="3:00PM" 
         avatar={ faker.image.avatar() }
       />
      </ApprovalCard>
      <ApprovalCard>
       <CommentDetail 
         author="Olivia" 
         comment="Something irrelevant!" 
         date="2:40PM" 
         avatar={ faker.image.avatar() }
       />
      </ApprovalCard>
    </div>
  ) 
}

ReactDOM.render(<App />, document.querySelector('#root'));
