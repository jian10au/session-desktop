import React from 'react';
// import classNames from 'classnames';

interface Props {
  /**
   * Corresponds to the theme setting in the app, and the class added to the root element.
   */
  ios: boolean;
  theme: 'light-theme' | 'dark-theme';
  type: 'private' | 'group';
}

/**
 * Provides the parent elements necessary to allow the main Signal Desktop stylesheet to
 * apply (with no changes) to messages in the Style Guide.
 */
export class ConversationContext extends React.Component<Props> {

  

  // public render() {

  //   console.log('Where ConversationContext')

  //   const { ios, theme, type } = this.props;

  //   return (
  //     <div
  //       className={classNames(theme || 'light-theme', ios ? 'ios-theme' : null)}
  //     >
  //       <div className={classNames('conversation', type || 'private')}>
  //         <div className="discussion-container" style={{ padding: '0.5em' }}>
  //           <ul className="message-list">
  //             where am I?
  //             {this.props.children}
  //             </ul>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}
