import React, { Component } from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

// import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
    `;

    // const StyledAppBlock = styled(AppBlock)`
    //     background-color: grey;
    //     `;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: "Going to learn React", important: true, like: false, id: 1 },
                {label: "That is so good", important: false, like: false, id: 2 },
                {label: "I need a break...", important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all'
        }

        this.maxId = 4;

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        });
    }

    addItem(body) {
        this.setState(({data}) => {
            return {
                data: [...data, {
                    label: body,
                    important: false,
                    id: this.maxId++
                }]
            }
        })
    }

    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];

            return {
                data: [...data.slice(0, index),
                { ...old, important: !old.important },
                ...data.slice(index + 1)]
            };
        });
    }

    onToggleLike(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];

            return {
                data: [...data.slice(0, index),
                    {...old, like: !old.like},
                    ...data.slice(index + 1)]
            }
        });
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items;
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render () {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch = {this.onUpdateSearch} />
                    <PostStatusFilter
                        filter = {filter}
                        onFilterSelect = {this.onFilterSelect} />
                </div>
                <PostList
                    posts ={visiblePosts}
                    onDelete = {this.deleteItem}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleLike = {this.onToggleLike}/>
                <PostAddForm
                    onAdd = {this.addItem} />
            </AppBlock>
        )
    }
}