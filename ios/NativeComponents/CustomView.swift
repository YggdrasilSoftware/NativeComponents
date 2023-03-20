import UIKit

class CustomView: UIView {

  @objc var status = false {
    didSet {
      self.setupView()
    }
  }

  @objc var onClick: RCTBubblingEventBlock?

  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }

  private func setupView() {
    self.backgroundColor = self.status ? .green : .red

    self.isUserInteractionEnabled = true
  }

  override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
    guard let onClick = self.onClick else { return }

    let params: [String : Any] = ["value1":"react demo","value2":1]
    onClick(params)
  }

}
