import React from 'react'
import './style.scss'

/**
 * @packages NPM/Yarn registered packages
 */
import { Breadcrumbs, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Inbox() {
    return (
        <div className="inbox__container">
            <h2 className="inbox__container__title">Chat</h2>

            <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              to="/getting-started/installation/"
            >
              Dukan
            </Link>
            <Typography color="text.primary">
              Inbox
            </Typography>
          </Breadcrumbs>

          {/* section => chatbox */}
          <div className="inbox__container__chatboxContainer">
              <div className="inbox__container__chatboxContainer__messagePeople">

              </div>

              <div className="inbox__container__chatboxContainer__messageHistory">
                  
              </div>
          </div>
        </div>
    )
}
