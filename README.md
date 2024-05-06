# be-assignment
**Prerequisite:**<br />
`yarn install`<br />
`brew install grpcurl`

**For REST API**<br />
`yarn dev`

**Call REST API**<br />
`curl http://localhost:9000/`

**For GRPC**<br />
`yarn dev-grpc`

**Call GRPC**<br />
`grpcurl -proto src/proto/user-summary.proto  -plaintext localhost:50051 user.User.UserSummary`