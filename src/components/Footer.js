import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import './App.css'

function Footer() {
    return (
        <div className="footer">
            <FilterLink filter={VisibilityFilters.SHOW_ALL} className="filter__button">All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} className="filter__button">Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} className="filter__button">Completed</FilterLink>
        </div>
    )
}

export default Footer
