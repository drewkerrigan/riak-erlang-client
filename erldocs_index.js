var index = [["app","riak-erlang-client","riak-erlang-client","[application]"],
             ["mod","riak-erlang-client","riakc_obj",
              "riakc_obj is used to wrap bucket/key/value data se"],
             ["mod","riak-erlang-client","riakc_pb",
              "protocol buffer utilities."],
             ["mod","riak-erlang-client","riakc_pb_socket",[]],
             ["fun","riak-erlang-client","riakc_obj:bucket/1",
              "Return the containing bucket for this riakc_obj."],
             ["fun","riak-erlang-client","riakc_obj:get_content_type/1",
              "Return the content type of the value if there are "],
             ["fun","riak-erlang-client","riakc_obj:get_content_types/1",
              "Return a list of content types for all siblings."],
             ["fun","riak-erlang-client","riakc_obj:get_contents/1",
              " Return the contents (a list of {metadata, value} "],
             ["fun","riak-erlang-client","riakc_obj:get_metadata/1",
              " Assert that this riak_object has no siblings and "],
             ["fun","riak-erlang-client","riakc_obj:get_metadatas/1",
              " Return a list of the metadata values for this ria"],
             ["fun","riak-erlang-client",
              "riakc_obj:get_update_content_type/1",
              "Return the content type of the update value."],
             ["fun","riak-erlang-client","riakc_obj:get_update_metadata/1",
              " Return the updated metadata of this riakc_obj."],
             ["fun","riak-erlang-client","riakc_obj:get_update_value/1",
              " Return the updated value of this riakc_obj."],
             ["fun","riak-erlang-client","riakc_obj:get_value/1",
              " Assert that this riakc_obj has no siblings and re"],
             ["fun","riak-erlang-client","riakc_obj:get_values/1",
              " Return a list of object values for this riakc_obj"],
             ["fun","riak-erlang-client","riakc_obj:key/1",
              " Return the key for this riakc_obj."],
             ["fun","riak-erlang-client","riakc_obj:md_ctype/1",
              " Return the content type from metadata."],
             ["fun","riak-erlang-client","riakc_obj:new/2",
              "Constructor for new riak client objects."],
             ["fun","riak-erlang-client","riakc_obj:new/3",
              "Constructor for new riak client objects with an up"],
             ["fun","riak-erlang-client","riakc_obj:new/4",
              "Constructor for new riak client objects with an up"],
             ["fun","riak-erlang-client","riakc_obj:select_sibling/2",
              " Select the sibling to use for update - starting f"],
             ["fun","riak-erlang-client","riakc_obj:update_content_type/2",
              " Set the updated content-type of an object to CT."],
             ["fun","riak-erlang-client","riakc_obj:update_metadata/2",
              " Set the updated metadata of an object to M."],
             ["fun","riak-erlang-client","riakc_obj:update_value/2",
              " Set the updated value of an object to V."],
             ["fun","riak-erlang-client","riakc_obj:update_value/3",
              " Set the updated value of an object to V."],
             ["fun","riak-erlang-client","riakc_obj:value_count/1",
              " Return the number of values (siblings) of this ri"],
             ["fun","riak-erlang-client","riakc_obj:vclock/1",
              " Return the vector clock for this riakc_obj."],
             ["fun","riak-erlang-client","riakc_pb_socket:default_timeout/1",
              "Return the default timeout for an operation if non"],
             ["fun","riak-erlang-client","riakc_pb_socket:delete/3",
              "Delete the key/value."],
             ["fun","riak-erlang-client","riakc_pb_socket:delete/4",
              "Delete the key/value specifying timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:delete/5",
              "Delete the key/value with options and timeout\n    "],
             ["fun","riak-erlang-client","riakc_pb_socket:get/3",
              "Get bucket/key from the server\n       Will return "],
             ["fun","riak-erlang-client","riakc_pb_socket:get/4",
              "Get bucket/key from the server specifying timeout\n"],
             ["fun","riak-erlang-client","riakc_pb_socket:get/5",
              "Get bucket/key from the server supplying options a"],
             ["fun","riak-erlang-client","riakc_pb_socket:get_bucket/2",
              "Get bucket properties."],
             ["fun","riak-erlang-client","riakc_pb_socket:get_bucket/3",
              "Get bucket properties specifying a timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:get_client_id/1",
              "Get the client id for this connection."],
             ["fun","riak-erlang-client","riakc_pb_socket:get_client_id/2",
              "Get the client id for this connection specifying t"],
             ["fun","riak-erlang-client","riakc_pb_socket:get_server_info/1",
              "Get the server information for this connection."],
             ["fun","riak-erlang-client","riakc_pb_socket:get_server_info/2",
              "Get the server information for this connection spe"],
             ["fun","riak-erlang-client","riakc_pb_socket:is_connected/1",
              "Return true if connected to the remote server and "],
             ["fun","riak-erlang-client","riakc_pb_socket:is_connected/2",
              "See is_connected/1 with gen_server timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:list_buckets/1",
              "List all buckets on the server."],
             ["fun","riak-erlang-client","riakc_pb_socket:list_buckets/2",
              "List all buckets on the server specifying timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:list_keys/2",
              "List all keys in a bucket."],
             ["fun","riak-erlang-client","riakc_pb_socket:list_keys/3",
              "List all keys in a bucket specifying timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred/1",
              "Perform a map/reduce job across the cluster."],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred/1",
              "Perform a map/reduce job across the cluster."],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred_bucket/1",
              "Perform a map/reduce job against a bucket with a t"],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred_bucket/1",
              "Perform a map/reduce job against a bucket across t"],
             ["fun","riak-erlang-client",
              "riakc_pb_socket:mapred_bucket_stream/1",
              "Perform a streaming map/reduce job against a bucke"],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred_stream/1",
              "Perform a streaming map/reduce job with a timeout "],
             ["fun","riak-erlang-client","riakc_pb_socket:mapred_stream/1",
              "Perform a streaming map/reduce job across the clus"],
             ["fun","riak-erlang-client","riakc_pb_socket:ping/1",
              "Ping the server."],
             ["fun","riak-erlang-client","riakc_pb_socket:ping/2",
              "Ping the server specifying timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:put/2",
              "Put the metadata/value in the object under bucket/"],
             ["fun","riak-erlang-client","riakc_pb_socket:put/3",
              "Put the metadata/value in the object under bucket/"],
             ["fun","riak-erlang-client","riakc_pb_socket:put/4",
              "Put the metadata/value in the object under bucket/"],
             ["fun","riak-erlang-client","riakc_pb_socket:search/1",
              "Execute a search query and feed the results into a"],
             ["fun","riak-erlang-client","riakc_pb_socket:search/1",
              "Execute a search query."],
             ["fun","riak-erlang-client","riakc_pb_socket:set_bucket/3",
              "Set bucket properties."],
             ["fun","riak-erlang-client","riakc_pb_socket:set_bucket/4",
              "Set bucket properties specifying a timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:set_client_id/2",
              "Set the client id for this connection."],
             ["fun","riak-erlang-client","riakc_pb_socket:set_client_id/3",
              "Set the client id for this connection specifying t"],
             ["fun","riak-erlang-client","riakc_pb_socket:set_options/2",
              "Change the options for this socket."],
             ["fun","riak-erlang-client","riakc_pb_socket:set_options/3",
              "set_options/2 with a gen_server timeout."],
             ["fun","riak-erlang-client","riakc_pb_socket:start/2",
              "Create a process to talk with the riak server on A"],
             ["fun","riak-erlang-client","riakc_pb_socket:start/3",
              "Create a process to talk with the riak server on A"],
             ["fun","riak-erlang-client","riakc_pb_socket:start_link/2",
              "Create a linked process to talk with the riak serv"],
             ["fun","riak-erlang-client","riakc_pb_socket:start_link/3",
              "Create a linked process to talk with the riak serv"],
             ["fun","riak-erlang-client","riakc_pb_socket:stop/1",
              "Disconnect the socket and stop the process."],
             ["fun","riak-erlang-client","riakc_pb_socket:stream_list_keys/2",
              "Stream list of keys in the bucket to the calling p"],
             ["fun","riak-erlang-client","riakc_pb_socket:stream_list_keys/3",
              "Stream list of keys in the bucket to the calling p"]];