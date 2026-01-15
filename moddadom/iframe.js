
// iframe message event
function msgf(event) {
  a_msg.push(event.data);
  console.log("message from parent 20260110", event.data);
  f_t()
}