/**
 * This is the event handler for Auctioneer.SuccessfulBidRange
 */
import logger from '../../lib/logger';
import utils from '../utils';
import { TxType } from '../../shared/constants';
import { 
  addNotification,
  getAddressByTx,
} from '../../backend/api';

const log = logger.getLogger('SuccessfulBidRange');

export default async (job) => {
  log.debug("SuccessfulBidRange handler reached");

  job.progress(1);

  // Sanity check
  if (job.data.event.name !== 'SuccessfulBidRange')
    throw new Error('Invalid event for this handler');

  const evData = utils.getEventData(job.data.event);
  const txHash = job.data.txHash;

  job.progress(10);

  log.debug({ txHash }, "Looking up user address ");

  // We can only look up a user address by a transaction entry in this case
  const userAddr = await getAddressByTx(txHash);

  if (userAddr.success && userAddr.data !== null) {
    await addNotification(userAddr.data, 'SuccessfulBidRange', {
      bidder: user.address,
      scope: evData.scope,
      timePeriodStart: evData.timePeriodStart,
      range: evData.range,
      lunAmount: evData.lunAmount,
    });
  }

  job.progress(50);

  await utils.completeTransaction(txHash, TxType.BID);

  job.progress(100);

};