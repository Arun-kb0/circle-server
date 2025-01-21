import IChatController, {
  CreateMessageHandler, DeleteMessageHandler,
  FindMessageByUerHandler, FindMessageMessageHandler,
  UpdateMessageHandler
} from "../interfaces/IChatController";
import IChatService from "../interfaces/IChatService";


class ChatController implements IChatController {

  constructor(
    private chatService: IChatService
  ) { }
  // ! not completed
  createMessage!: CreateMessageHandler;
  updateMessage!: UpdateMessageHandler;
  deleteMessage!: DeleteMessageHandler;
  findMessageByUser!: FindMessageByUerHandler;
  findMessageById!: FindMessageMessageHandler;

}

export default ChatController