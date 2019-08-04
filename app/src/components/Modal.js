import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const {status} = this.props;
        return (
            <div className={status}>
                <div className="content">
                    <p>Magna nisi occaecat ea tempor. Ad cupidatat ullamco fugiat minim occaecat cillum dolore qui nisi esse voluptate ullamco. Eu veniam et deserunt enim quis veniam tempor Lorem ullamco do proident incididunt aliqua culpa. Laboris qui amet labore et.

Aliqua velit ullamco laboris Lorem aliqua commodo consequat voluptate adipisicing ullamco fugiat. Adipisicing reprehenderit nostrud laboris ut anim. Culpa incididunt aliqua aliquip eiusmod sint commodo sunt et consequat laboris sint eu.

Ullamco anim esse ex do. Adipisicing aliquip labore reprehenderit duis labore quis anim ut incididunt nulla ut laboris. Non incididunt et mollit eiusmod laboris cillum. Qui minim excepteur tempor non mollit tempor aliquip exercitation. Ullamco nulla dolore duis enim minim commodo reprehenderit. Magna anim cupidatat qui adipisicing eiusmod est nulla ut commodo do excepteur sit sunt elit. Do mollit eiusmod eu reprehenderit consectetur aliqua ullamco reprehenderit magna ad enim culpa pariatur.</p>
                    <button className="button" onClick={this.props.hideModal}>Cerrar</button>
                </div>
            </div>
        )
    }
}
