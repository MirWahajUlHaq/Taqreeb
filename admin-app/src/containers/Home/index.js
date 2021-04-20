import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

export default function Home() {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin:'5rem', background:'#fff'}}>
                    <h1>Welcome to Admin Dashboard!</h1>
                </Jumbotron>
            </Layout>
        </div>
    )
}
