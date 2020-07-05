import { IComment } from '../../../../interface/entity';

export const ADD_COMMENT = '[Comment] ADD_COMMENT';

export interface AddCommentAction {
   type: typeof ADD_COMMENT;
   comment: IComment;
}

export type CommentActionTypes = AddCommentAction;
