import React from "react";
import {connect} from 'react-redux'
import {} from '../data'

function App(props) {
  console.log(props)
 
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <Search onSearch={props.onSearch}/>
      <Articles articles={props.articles}/> 

    </div>
  );
}
const search=(props)=>(
  <input type="text" onChange={(e)=>{props.onSearch(e.target.value)}}/>
)
const Articles = (props)=>(props.articles.map(article=>(<ul>
     <li > <a href={article.url}>{article.title}</a> </li> 
    </ul>)
)
)

const mapStateToProps = state => ({
  articles: state.articlesSate.articles,
  searchTerm: state.searcState.searchTerm
});
const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


// export default App;
