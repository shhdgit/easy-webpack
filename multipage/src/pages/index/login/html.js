import layout from 'layout/stand/html'
import test from 'components/test.pug'
import svg from 'assets/images/avatar.svg'
import login from './html.pug'

export default layout.render(login, { test }, { svg })
