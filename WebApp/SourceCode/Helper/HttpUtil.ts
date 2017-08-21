/**
 * Created by xianing on 2017/4/19.
 */

import * as request from 'superagent';
import Config from '../Helper/Config';

class HttpUtil {

    static getHeader(): Object {
        let headers = {
            ChannelID: '',
            GWTAuthorization: 'ios<>ssss'
        };

        return headers;
    }

    static resultForHttp(error: Error, result: request.Response, callback: (result: boolean, res: Object) => void) {
        if (error) {
            callback(false, null);
        } else {
            let data = result.body;

            if (data.respCode == '00000') {
                callback(true, data.data);
            } else {
                callback(false, null);
            }
        }
    }

    static post(url: string, data: Object, callback: (result: boolean, res: Object) => void) {
        request.post(Config.ROOT_URL+url)
            .set(HttpUtil.getHeader())
            .send(data)
            .end((error: Error, result: request.Response) => {
                HttpUtil.resultForHttp(error, result, callback);
            });
    }

}

export default HttpUtil;
