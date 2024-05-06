import { Server, ServerCredentials, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import {
  UserServer,
  UserService,
  UserSummary,
  UserSummaryRequest,
  UserSummaryResponse,
} from './proto/user-summary'
import { getUserSummaryRest } from ".";


const server = new Server();

const HOST = "0.0.0.0";
const PORT = 50051;

const address = `${HOST}:${PORT}`;


export const getUserSummaryServer = (): UserServer => {
  async function userSummary(call: ServerUnaryCall<UserSummaryRequest, UserSummaryResponse>, callback: sendUnaryData<UserSummaryResponse>) {
    const restResult = await getUserSummaryRest()

    const response: UserSummaryResponse = {
      result: restResult
    }
    callback(null, response)
  }

  return {
    userSummary
  }
}

server.addService(UserService, getUserSummaryServer())
server.bindAsync(
  address,
  ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      throw error
    }
    console.log('GRPC server is running on', port)
  }
)