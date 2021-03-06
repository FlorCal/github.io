// libraries
import React from 'react'

// assets
import desktop from '../../app/img/desktop.svg'
import phone from '../../app/img/phone.svg'

class ProjectComponent extends React.Component {

    onExternalLinkClick() {
        var win = window.open(this.props.data.infoA[4], '_blank');
        win.focus();
    }

    plotDevice() {
        let out = []

        if (this.props.data.mobile) {
            out.push(<div className='screen1' key='screen1'
                style={{
                    background: 'url(' + this.props.data.screens[0] + ')',
                    backgroundSize: '100%'
                }}>
            </div>)
            out.push(<div className='screen2' key='screen2'
                style={{
                    background: 'url(' + this.props.data.screens[1] + ')',
                    backgroundSize: '100%'
                }}>
            </div>)
            out.push(<img src={phone} className='mobile1' key='mobile1'/>)

            out.push(<img src={phone} className='mobile2' key='mobile2'/>)
        } else {
            out.push(<img src={desktop} className='desktop' key='desktop'/>)
            out.push(<div className='screen' key='screen'
                style={{
                    //  proportions for screen inherited from scss
                    // to use for every desktop screen
                    background: 'url(' + this.props.data.screens[0] + ')'
                }}>
            </div>)
        }

        return out
    }

    render() {
        let d = this.props.data
        let technologies = () => {
            if( Array.isArray(d.infoA[1]) ) {
                return d.infoA[1].map( (v, i) => <div key={i}>{v}</div> )
            }
            return <div>{d.infoA[1]}</div>
        }

        return (
            // checks if project should flip to right design
            <div className={'ProjectComponent' +
                (d.right ? ' right' : '') +
                (d.mobile ? ' mobile' : '')
            }>

                {this.plotDevice()}

                <div className='company'>

                    <div className='icon'
                        style={{
                            //  proportions for icon inherited from scss
                            // to use for every company icon
                            background: 'url(' + d.icon + ')'
                        }}>
                    </div>

                    <div className='name'>
                        {d.name}
                    </div>

                    <div className='description'>
                        {d.description}
                    </div>


                </div>

                <div className='infoQ'>
                    <div>My Role</div>
                    <div style={{height: Array.isArray(d.infoA[1]) ? d.infoA[1].length * 19 : null}}>Technologies Used</div>
                    <div>Year of Work</div>
                    <div>Location</div>
                    {d.infoA[4] ?
                        <div>Url</div>
                        : null}

                </div>

                <div className='infoA fBlack' >
                    <div>{d.infoA[0]}</div>
                    {technologies()}
                    <div>{d.infoA[2]}</div>
                    <div>{d.infoA[3]}</div>
                    {d.infoA[4] ?
                        <div className='url' onClick={this.onExternalLinkClick.bind(this)}>{d.infoA[4]}<i /></div>
                        : null}

                </div>


            </div>
        )
    }
}

export default ProjectComponent
