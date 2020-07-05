import { IComment } from '../../../../interface/entity';
import * as CommentTypes from './types';

export const addComment = (data: IComment): CommentTypes.AddCommentAction => ({
   type: CommentTypes.ADD_COMMENT,
   comment: data
});
