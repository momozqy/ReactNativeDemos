/**
 * Created by MoMo on 2017/4/24.
 */
let NetUtil = {
    postJson(url, data, callback){
        var fetchOptions = {
            method: 'POST',
            headers: {
            },
            body:data
        };
        fetch(url, fetchOptions)
            .then(response => response.json())
            .then((responseData) => {
                callback(responseData);
               //callback(responseData.msg);
            }).done();
    },
}
export default NetUtil;
