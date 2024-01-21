import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import TodosFilterProvider from '@/providers/todos/TodosFilterProvider.tsx';
import TodosOptionsProvider from '@/providers/todos/TodosOptionsProvider.tsx';
import TodosProvider from '@/providers/todos/TodosProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TodosFilterProvider>
                <TodosOptionsProvider>
                    <TodosProvider>
                        <App/>
                    </TodosProvider>
                </TodosOptionsProvider>
            </TodosFilterProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
